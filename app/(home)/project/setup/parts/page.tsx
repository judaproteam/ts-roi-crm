import Parts from '@/ui/Parts'
import { db } from '@/db/db'

export default async function partsPage({ searchParams: { prjId } }) {
  prjId = Number(prjId)
  if (!prjId) return null

  const prts = await db.part.findMany({ where: { prjId }, orderBy: { updatedAt: 'desc' } })

  return (
    <div className="wrap">
      <Parts prts={prts} prjId={prjId} />
    </div>
  )
}
