import Hatkana from "@/ui/Hatkana"
import { getTasksNParts } from "@/db/actions/setupTask"

export default async function hatkana() {
  const res = await getTasksNParts()
  let { grpTasks, parts, prtsNoGrp } = JSON.parse(res)

  return (
    <div className="">
      <Hatkana grpTasks={grpTasks} prtsNoGrp={prtsNoGrp} parts={parts} />
    </div>
  )
}
