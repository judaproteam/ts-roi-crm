import Hatkana from "@/ui/Hatkana"
import { db } from "@/db/db"
import { getTasksNParts } from "@/db/actions/setupTask"

export default async function hatkana() {
  const res = await getTasksNParts()
  let { grpTasks, parts, prtsNoGrp } = JSON.parse(res)

  // const parts = await db.part.findMany({ where: { prjId: global.prjId } })
  // const prtsNoGrp = await db.part.findMany({
  //   where: { tasksId: null, AND: { prjId: global.prjId } },
  // })

  return (
    <div className="">
      <Hatkana grpTasks={grpTasks} prtsNoGrp={prtsNoGrp} parts={parts} />
    </div>
  )
}
