'use client'

import TaskForm from '@/components/form/forms/TaskForm'
import Table from '@/components/form/table/Table'
import Icon from '@/components/Icon'
import { updateTasksNParts, crtTasksNParts, deleteTasksNParts } from '@/db/actions/setupTask'

import { clone, genId } from '@/utils/func'
import { useState } from 'react'
import TaskTableRows from '@/components/form/table/TaskTableRows'
import { showPop } from '@/components/GlobalPopMsg'

let tmpIndex: number, oldTasks: any[], oldParts: any[]
const initialTask = { title: '', dis: '', pic: false, vid: false, mngr: false, id: genId() }

export default function Hatkana({ grpTasks, prtsNoGrp, parts, prjId }) {
  const [tmpParts, setTmpParts] = useState([])
  const [tasks, setTasks] = useState([initialTask])
  const [editMode, setEditMode] = useState(false)

  // refresh on change
  function refresh() {
    setTasks([initialTask])
    setTmpParts([])
  }

  // Save Tasks
  async function onSave(e) {
    e.preventDefault()

    let partIds,
      tasksDb = [] as any[]

    for (let i = 0; i < document.forms.length; i++) {
      const form = document.forms[i]
      if (!form.checkValidity()) return form.reportValidity()
      const data = new FormData(form)

      if (i === 0) {
        partIds = Object.keys(Object.fromEntries(data))
        if (partIds.length === 0) {
          return showPop({ msg: 'לא נבחרו פריטים', icon: 'error' })
        }
      } else {
        tasksDb.push(Object.fromEntries(data))
      }

      console.log('global.prjId: ', globalThis.prjId)
      console.log('fromEntries : ', i + ' ', Object.fromEntries(data))
      console.log('tasksDb: ', tasksDb)
    }
    showPop({ msg: 'שומר משימות...', icon: 'loading' })

    partIds = partIds.map(Number)
    const res = await crtTasksNParts(tasksDb, partIds, prjId)
    refresh()
    showPop({ msg: 'המשימות נשמרו בהצלחה', icon: 'success' })
    console.log('res: ', res)
  }

  // Update Task
  async function updateTask(e) {
    e.preventDefault()

    let partIds,
      newTasks = [] as any[]

    for (let i = 0; i < document.forms.length; i++) {
      const form = document.forms[i]
      if (!form.checkValidity()) return form.reportValidity()
      const data = new FormData(form)

      if (i === 0) {
        partIds = Object.fromEntries(data)
        if (partIds) return document.getElementById('noPartsMsg')?.showPopover()
      } else {
        newTasks.push(Object.fromEntries(data))
      }
    }

    oldParts = oldParts.map((el) => el.id)

    partIds = Object.keys(partIds).map(Number)
    const res = await updateTasksNParts(newTasks, oldTasks, partIds, oldParts)
    refresh()
    console.log('res: ', res)
    scrollBy(0, 200)
  }

  async function deleteAllTasks() {
    oldParts = oldParts.map((el) => el.id)
    const res = await deleteTasksNParts(oldTasks, oldParts)
    refresh()
    console.log('res: ', res)
    scrollBy(0, 200)
  }

  function onNextTask(e) {
    e.preventDefault()
    const form = document.forms[document.forms.length - 1]
    if (!form.checkValidity()) return form.reportValidity()
    setTasks((tasks) => [...tasks, { ...initialTask, id: genId() }])
  }

  function deleteTask() {
    const spredArr = [...tasks]
    spredArr.splice(tmpIndex, 1)

    setTasks(spredArr)
    document.getElementById('deleteTaskPop')?.hidePopover()
  }

  function swap(i, num) {
    let spredArr = [...tasks]
    const tmp = spredArr[i + num]
    spredArr[i + num] = tasks[i]
    spredArr[i] = tmp
    setTasks(spredArr)
  }

  return (
    <main className="flex items-start gap-0">
      <section className="paper w-3/4 mx-auto">
        <h2 className="flex gap-4 border-b pb-2">
          <Icon name="screwdriver-wrench" type="reg" className="size-5" />
          <span className="text-xl font-semibold">צור שלבי ביצוע להתקנה</span>
        </h2>

        {/* PARTS SELECTION */}
        <form id="hatkanaForm" name="hatkanaForm">
          <div className="mt-6">
            <p className="font-bold mb-3">בחר פרטים מהרשימה ליצירת שלבי התקנה</p>
            <div className="flex gap-5">
              {[...tmpParts, ...prtsNoGrp].map((part) => {
                return (
                  <label className="check" key={part.id}>
                    <input type="checkbox" defaultChecked={part.check} name={part.id} />
                    <p title={part.dis}>{part.name}</p>
                  </label>
                )
              })}
            </div>
          </div>
        </form>

        <div className="mt-8">
          {tasks.map((task, i) => {
            return (
              <div key={task.id}>
                <div className="bg-slate-50 flex justify-between mt-8 mb-4 px-2">
                  <div className="flex gap-8">
                    <h2 className="font-bold text-l">משימה מס' {i + 1}</h2>
                    <div className="flex gap-0">
                      <p className="">מיועדת ל:</p>
                      <select name="" className="min-w-20 py-0 px-2 h-8 bg-slate-50">
                        <option value="מתקין">מתקין</option>
                        <option value="מנהל">מנהל</option>
                      </select>
                    </div>
                  </div>

                  {/* TASK Action Buttons */}
                  <div className="flex">
                    <button
                      type="button"
                      title="הרם משימה למעלה"
                      onClick={() => swap(i, -1)}
                      disabled={i === 0}>
                      <Icon name="arrow-up" className="size-4" />
                    </button>
                    <button
                      type="button"
                      title="הורד משימה למטה"
                      onClick={() => swap(i, 1)}
                      disabled={tasks.length === i + 1}>
                      <Icon name="arrow-down" className="size-4" />
                    </button>
                    <button
                      type="button"
                      title="מחק משימה"
                      popoverTarget="deleteTaskPop"
                      // onClick={(e) => deleteTask(e, i)}
                      onClick={() => (tmpIndex = i)}
                      // disabled={tmpGrp.tasks.length === 1}
                    >
                      <Icon name="trash" className="size-4" />
                    </button>
                  </div>
                </div>

                <TaskForm task={task} />
              </div>
            )
          })}

          <div className="flex justify-between mt-10">
            <button className="softBtn self-start" onClick={onNextTask} type="button">
              <Icon name="plus" type="reg" />
              <p className="font-semibold">הוסף משימה</p>
            </button>

            {!editMode && (
              <div>
                <p className="text-sm text-gray-600 mb-1 mt-4">זהו שלב הביצוע האחרון לפרטים אלו?</p>
                <button className="btn" onClick={onSave}>
                  <Icon name="floppy-disk" className="bg-white" type="sol" />
                  <p>שמור את כל המשימות</p>
                </button>
              </div>
            )}
            {editMode && (
              <div className="flex items-end mt-4">
                <button
                  className="softBtn-xs-r"
                  onClick={() => {
                    setTasks([initialTask])
                    setEditMode(false)
                    setTmpParts([])
                    scroll(0, 70)
                  }}>
                  <Icon name="xmark" className="" type="lit" />
                  <p>בטל עריכה</p>
                </button>
                <button className="btn bg-green-800" onClick={updateTask}>
                  <Icon name="floppy-disk-pen" className="bg-white rtl:scale-x-100" type="sol" />
                  <p>שמור עריכה</p>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TASKS TABLE */}

      <section className="paper w-3/4 mx-auto py-12 mt-0">
        {grpTasks.map((grp) => {
          const grpParts = parts.filter((el) => el.tasksId === grp[0].tasksId)
          return (
            <main
              className="py-14 first:pt-0 last:pb-0 border-b last:border-b-0 border-slate-300"
              key={grp[0].tasksId}>
              <div className="flex justify-between mb-8 gap-8 items-end">
                <div className="flex gap-4">
                  <p className="font-bold">הפרטים לשלבי הביצוע:</p>
                  {grpParts.map((part) => {
                    return (
                      <p title={part.dis} key={part.id}>
                        {part.name}
                      </p>
                    )
                  })}
                </div>

                {/* TASKS Action Buttons */}
                <div className="flex gap-4">
                  <button
                    className="simpleBtn-xs hover:bg-blue-50"
                    onClick={() => {
                      setTasks(clone(grp))
                      grpParts.forEach((el) => (el.check = true))
                      setTmpParts(grpParts)
                      setEditMode(true)
                      oldTasks = clone(grp)
                      oldParts = clone(grpParts)
                      scroll(0, 70)
                    }}>
                    <Icon name="pen-to-square" className="rtl:scale-x-100" />
                    <p>עריכה</p>
                  </button>
                  <button
                    className="simpleBtn-xs hover:bg-red-50"
                    popoverTarget="deletePop"
                    onClick={() => {
                      oldTasks = clone(grp)
                      oldParts = clone(grpParts)
                    }}>
                    <Icon name="trash" />
                    <p>מחיקה</p>
                  </button>
                </div>
              </div>

              <Table headNames={['משימה', 'כותרת', 'פירוט', 'בסיום המשימה']}>
                <TaskTableRows rowsData={grp} />
              </Table>
            </main>
          )
        })}
      </section>

      <div id="deletePop" popover="auto" className="pop">
        <DeletePop
          txt="בטוח למחוק את קבוצת המשימות?"
          onClick={() => {
            deleteAllTasks()
            document.getElementById('deletePop')?.hidePopover()
          }}
        />
      </div>

      <div id="deleteTaskPop" popover="auto" className="pop">
        <DeletePop txt="בטוח למחוק את המשימה?" onClick={deleteTask} />
      </div>
    </main>
  )
}

const DeletePop = ({ txt = '', onClick }) => {
  return (
    <>
      <div className="flex gap-3 border-b pb-1 mb-3">
        <Icon name="triangle-exclamation" />
        <p className="">פעולת מחיקה</p>
      </div>
      <p>{txt}</p>
      <button className="softBtn-s-r w-full mt-2" onClick={onClick}>
        <p>כן מחק</p>
        <Icon name="trash" />
      </button>
    </>
  )
}
