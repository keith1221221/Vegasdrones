import StateShowPage, { stateShowMetadata } from "@/components/StateShowPage";
import { stateShowPages } from "@/lib/stateShowPages";
const state = stateShowPages[1];
export const metadata = stateShowMetadata(state);
export default function Page() { return <StateShowPage state={state} />; }
