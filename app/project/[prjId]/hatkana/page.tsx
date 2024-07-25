import Hatkana from "@/ui/Hatkana"
import { getTasksNParts } from "@/db/actions/setupTask"

export async function generateStaticParams() {
  // const agnts = await db.agnt.findMany({
  //   select: { id: true },
  // })

  // return agnts.map((item) => ({
  //   id: item.id.toString(),
  // }))

  return [{ prjId: "3434343" }]
}

export default async function hatkana({ params: { prjId } }) {
  const res = await getTasksNParts(Number(prjId))
  let { grpTasks, parts, prtsNoGrp } = JSON.parse(res)

  return (
    <div className="">
      <Hatkana grpTasks={grpTasks} prtsNoGrp={prtsNoGrp} parts={parts} />
    </div>
  )
}
