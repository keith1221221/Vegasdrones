# OpenAI API Setup Instructions

## Getting Your OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to **API Keys** section (https://platform.openai.com/api-keys)
4. Click **"Create new secret key"**
5. Copy the generated API key (you won't be able to see it again!)

## Setting Up Your Environment

1. Open the `.env.local` file in the root of your project
2. Replace `your-openai-api-key-here` with your actual OpenAI API key:
   ```
   OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxx
   ```
3. Save the file

## Testing Your Setup

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit the health check endpoint:
   ```
   http://localhost:3000/api/chat
   ```
   You should see: `{"ok":true,"openai":"configured"}`

3. Test the chatbot on your website at:
   ```
   http://localhost:3000/chatbot
   ```

## Important Notes

- **Never commit your API key to version control** - The `.env.local` file is already in `.gitignore`
- **Keep your API key secure** - Don't share it publicly
- **Monitor your usage** - Check your OpenAI dashboard for API usage and billing
- The chatbot currently uses the `gpt-4o-mini` model by default (cost-effective)

## Current Model

Your chatbot is configured to use:
- Model: `gpt-4o-mini`
- Temperature: 0.2 (more focused/deterministic responses)
- System prompt: "You are a helpful assistant for Vegas Drones. Be concise, friendly, and accurate."

## Troubleshooting

If you see "Server not configured" error:
1. Check that `.env.local` exists in the project root
2. Verify the API key is correct and active
3. Restart your development server after adding/changing the API key

If you see "Upstream error":
1. Check your OpenAI account has credits/billing set up
2. Verify the API key hasn't been revoked
3. Check OpenAI's status page for any outages
