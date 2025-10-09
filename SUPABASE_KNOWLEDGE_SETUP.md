# Supabase Database Schema Setup

## Required Database Setup for Vegas Drones Chatbot

Your chatbot is now configured to use Supabase for storing and retrieving custom knowledge. Follow these steps to set up your database:

### 1. Enable Vector Extension

In your Supabase SQL Editor, run:

```sql
-- Enable the vector extension for similarity search
CREATE EXTENSION IF NOT EXISTS vector;
```

### 2. Create the Documents Table

```sql
-- Create table for storing your custom knowledge documents
CREATE TABLE documents (
  id BIGSERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high')),
  embedding VECTOR(1536),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. Create the Document Matching Function

```sql
-- Function to find similar documents based on vector embeddings
CREATE OR REPLACE FUNCTION match_documents(
  query_embedding VECTOR(1536),
  match_threshold FLOAT DEFAULT 0.7,
  match_count INT DEFAULT 4,
  priority_filter TEXT DEFAULT NULL
)
RETURNS TABLE(
  id BIGINT,
  content TEXT,
  metadata JSONB,
  priority TEXT,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    documents.id,
    documents.content,
    documents.metadata,
    documents.priority,
    (documents.embedding <#> query_embedding) * -1 AS similarity
  FROM documents
  WHERE 
    (documents.embedding <#> query_embedding) * -1 > match_threshold
    AND (priority_filter IS NULL OR documents.priority = priority_filter)
  ORDER BY 
    CASE 
      WHEN documents.priority = 'high' THEN 3
      WHEN documents.priority = 'normal' THEN 2
      WHEN documents.priority = 'low' THEN 1
    END DESC,
    similarity DESC
  LIMIT match_count;
END;
$$;
```

### 4. Create Row Level Security (RLS) Policies

```sql
-- Enable RLS
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Allow reading for authenticated users
CREATE POLICY "Allow read access for authenticated users" ON documents
    FOR SELECT USING (auth.role() = 'authenticated');

-- Allow full access for service role (for your API)
CREATE POLICY "Allow full access for service role" ON documents
    FOR ALL USING (auth.role() = 'service_role');
```

### 5. Create Index for Better Performance

```sql
-- Create index on embedding column for faster similarity searches
CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);

-- Create index on priority for filtering
CREATE INDEX ON documents (priority);
```

## Adding Knowledge to Your Chatbot

### Method 1: Using Supabase Dashboard

1. Go to your Supabase dashboard
2. Navigate to Table Editor → `documents`
3. Click "Insert" → "Insert row"
4. Add your content and set priority:
   - **content**: Your custom information
   - **priority**: `high`, `normal`, or `low`
   - **metadata**: Optional JSON with additional info

> **Note**: You'll need to generate embeddings for the content using OpenAI's API and add them to the `embedding` column.

### Method 2: Using the Embedding Script (Recommended)

Create this script to automatically generate embeddings:

```typescript
// scripts/add-knowledge.ts
import OpenAI from 'openai';
import { supabase } from '../src/lib/supabase';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function addKnowledge(content: string, priority: 'low' | 'normal' | 'high' = 'normal', metadata: object = {}) {
  // Generate embedding
  const embeddingRes = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: content,
  });
  
  const embedding = embeddingRes.data[0]?.embedding;
  
  if (!embedding) {
    throw new Error('Failed to generate embedding');
  }
  
  // Insert into database
  const { data, error } = await supabase
    .from('documents')
    .insert({
      content,
      priority,
      metadata,
      embedding
    });
    
  if (error) {
    throw error;
  }
  
  console.log('Knowledge added successfully:', data);
}

// Example usage:
addKnowledge(
  "Vegas Drones offers 24/7 customer support via phone and email. Our support team is available at support@vegasdrones.com or call 1-800-DRONES.",
  'high',
  { category: 'support', topic: 'contact' }
);
```

### Priority Levels Explained

- **🔴 HIGH**: Most important information that should always appear first
  - Critical policies, pricing updates, emergency contacts
  - Will be displayed with "[HIGH PRIORITY]" prefix in responses
  
- **🟡 NORMAL**: Standard information
  - General procedures, FAQ answers, regular content
  
- **🟢 LOW**: Background or supplementary information
  - Historical data, optional details, less critical info

### Example High-Priority Knowledge Items

```sql
-- Insert high-priority items directly
INSERT INTO documents (content, priority, metadata) VALUES
(
  'URGENT: Vegas Drones is currently offering a limited-time 15% discount for bookings made before December 31st, 2025. This supersedes all other pricing.',
  'high',
  '{"type": "promotion", "expires": "2025-12-31"}'
),
(
  'NEW POLICY: All drone shows now include a free backup drone team at no extra cost to ensure 100% reliability.',
  'high',
  '{"type": "policy", "effective_date": "2025-09-01"}'
);
```

## Testing Your Knowledge Base

1. Add some knowledge using the methods above
2. Test your API endpoint: `POST /api/test-supabase`
3. Send a message that should match your knowledge
4. Verify high-priority items appear first in responses

## Maintenance

- Regularly review and update knowledge priorities
- Archive outdated information by updating priority to 'low'
- Use metadata to categorize and track knowledge items
- Monitor similarity thresholds and adjust as needed

Your chatbot will now prioritize your custom knowledge and display it prominently in responses!