import Parts from "@/ui/Parts"
import { db } from "@/db/db"

export default async function partsPage() {
  const prts = await db.part.findMany({ orderBy: { updatedAt: "desc" } })

  return (
    <div className="">
      <Parts prts={prts} />
    </div>
  )
}
