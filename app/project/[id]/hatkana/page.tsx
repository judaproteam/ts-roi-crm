import Hatkana from "@/ui/Hatkana"
import { getTasksNParts } from "@/db/actions/setupTask"

export default async function hatkana() {
  const res = await getTasksNParts()
  const { tasks, parts, prtsNoGrp } = JSON.parse(res)

  const grpTasks = Object.values(Object.groupBy(tasks, (el: any) => el.tasksId))

  return (
    <div className="">
      <Hatkana grpTasks={grpTasks} prtsNoGrp={prtsNoGrp} parts={parts} />
    </div>
  )
}
