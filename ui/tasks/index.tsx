'use client'

import Icon from 'zvijude/icon'
import { genId } from '@/utils/func'
import { useState } from 'react'
import PartsForm from './PartsForm'
import TasksForm from './TasksForm'
import TableTasks from './TableTasks'

const initialTask = { title: '', desc: '', pic: false, vid: false, mngr: false, id: genId() }
let tmpIndex: number, oldTasks: any[], oldParts: any[]

export default function TasksComp({ grpTasks, prtsNoGrp, parts, prjId }) {
  const [tmpParts, setTmpParts] = useState([])
  const [tasks, setTasks] = useState([initialTask])

  const [editMode, setEditMode] = useState(false)

  return (
    <main className="">
      <section className="paper max-w-5xl">
        <h2 className="flex gap-4 border-b pb-2">
          <Icon name="screwdriver-wrench" type="reg" className="size-5" />
          <span className="text-xl font-semibold">צור שלבי ביצוע להתקנה</span>
        </h2>

        <PartsForm tmpParts={tmpParts} prtsNoGrp={prtsNoGrp} />
        <TasksForm
          prjId={prjId}
          editMode={editMode}
          setEditMode={setEditMode}
          tmpIndex={tmpIndex}
          setTmpParts={setTmpParts}
          oldParts={oldParts}
          oldTasks={oldTasks}
          setTasks={setTasks}
          tasks={tasks}
          initialTask={initialTask}
        />
      </section>

      <TableTasks
        grpTasks={grpTasks}
        parts={parts}
        setTasks={setTasks}
        oldTasks={oldTasks}
        oldParts={oldParts}
        setTmpParts={setTmpParts}
        setEditMode={setEditMode}
      />
    </main>
  )
}
