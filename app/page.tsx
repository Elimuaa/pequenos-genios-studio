import { MODELS } from "@/generation/catalog"
import { StudioTemplate } from "@/layouts/studio"

import { NoModels } from "@/components/studio/no-models"

// Force dynamic rendering (like `pnpm dev`) — static prerendering breaks
// the Server Component payload in production.
export const dynamic = "force-dynamic"

export default function Page() {
  if (MODELS.length === 0) return <NoModels />
  return <StudioTemplate />
}
