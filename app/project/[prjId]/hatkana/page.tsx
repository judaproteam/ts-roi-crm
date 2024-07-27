import Hatkana from '@/ui/Hatkana'
import { getTasksNParts } from '@/db/actions/setupTask'

export async function generateStaticParams() {
  return [{ prjId: '3434343' }]
}

export default async function hatkana({ params: { prjId } }) {
  prjId = Number(prjId)

  const res = await getTasksNParts(prjId)
  let { grpTasks, parts, prtsNoGrp } = JSON.parse(res)

  return (
    <div className="">
      <Hatkana grpTasks={grpTasks} prtsNoGrp={prtsNoGrp} parts={parts} prjId={prjId} />
    </div>
  )
}
