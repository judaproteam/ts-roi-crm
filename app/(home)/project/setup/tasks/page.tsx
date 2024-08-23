import { getTasksNParts } from '@/db/tasks/get'
import TasksComp from '@/ui/tasks'

export default async function Tasks({ searchParams: { prjId } }) {
  prjId = Number(prjId)
  if (!prjId) return null

  const res = await getTasksNParts(prjId)
  let { grpTasks, parts, prtsNoGrp } = JSON.parse(res)

  return (
    <div className="wrap">
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
