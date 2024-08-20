import { getTasksNParts } from '@/db/tasks/get'
import TasksComp from '@/ui/TasksComp'

export default async function Tasks({ searchParams: { prjId } }) {
  prjId = Number(prjId)
  if (!prjId) return null

  const res = await getTasksNParts(prjId)
  let { grpTasks, parts, prtsNoGrp } = JSON.parse(res)

  return (
    <div className="">
      <TasksComp
        grpTasks={grpTasks}
        prtsNoGrp={prtsNoGrp}
        parts={parts}
        prjId={prjId}
        key={Math.random()}
      />
    </div>
  )
}
