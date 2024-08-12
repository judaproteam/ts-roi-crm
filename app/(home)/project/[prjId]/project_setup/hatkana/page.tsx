import { getTasksNParts } from '@/db/tasks/get'
import Hatkana from '@/ui/Hatkana'

export default async function hatkana({ params: { prjId } }) {
  prjId = Number(prjId)

  const res = await getTasksNParts(prjId)
  let { grpTasks, parts, prtsNoGrp } = JSON.parse(res)

  return (
    <div className="">
      <Hatkana
        grpTasks={grpTasks}
        prtsNoGrp={prtsNoGrp}
        parts={parts}
        prjId={prjId}
        key={Math.random()}
      />
    </div>
  )
}
