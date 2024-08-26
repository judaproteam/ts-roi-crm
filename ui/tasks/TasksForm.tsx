import TaskForm from '@/ui/tasks/TaskForm'
import Icon from 'zvijude/icon'
import { genId } from 'zvijude/funcs'
import { showPop } from 'zvijude/pop'
import { crtTasksNParts, updateTasksNParts } from '@/db/tasks/insert'
import { Btn } from 'zvijude/btns'

export default function TasksForm({
  tasks,
  editMode,
  setEditMode,
  prjId,
  tmpIndex,
  initialTask,
  setTasks,
  setTmpParts,
  oldParts,
  oldTasks,
}) {
  function swap(i, num) {
    let spredArr = [...tasks]
    const tmp = spredArr[i + num]
    spredArr[i + num] = tasks[i]
    spredArr[i] = tmp
    setTasks(spredArr)
  }

  function deleteTask() {
    if (!confirm('האם אתה בטוח שברצונך למחוק את המשימה?')) return

    const spredArr = [...tasks]
    spredArr.splice(tmpIndex, 1)

    setTasks(spredArr)
  }

  function onNextTask(e) {
    e.preventDefault()
    const form = document.forms[document.forms.length - 1]
    if (!form.checkValidity()) return form.reportValidity()
    setTasks((tasks) => [...tasks, { ...initialTask, id: genId() }])
  }

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
    }
    showPop({ msg: 'שומר משימות...', icon: 'loading' })

    partIds = partIds.map(Number)
    const res = await crtTasksNParts({ tasks: tasksDb, partIds, prjId })
    refresh()
    showPop({ msg: 'המשימות נשמרו בהצלחה', icon: 'success' })
  }

  // refresh on change
  function refresh() {
    setTasks([initialTask])
    setTmpParts([])
  }

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
        console.log('partIds: ', partIds)

        if (!partIds) return showPop({ msg: 'לא נבחרו פריטים', icon: 'error' })
      } else {
        newTasks.push(Object.fromEntries(data))
      }
    }

    const oldPartsIds = oldParts.map((el) => el.id)
    partIds = Object.keys(partIds).map(Number)

    showPop({ msg: 'משימות מתעדכנות...', icon: 'loading' })
    const res = await updateTasksNParts({
      tasks: newTasks,
      oldTasks,
      partIds,
      oldPartsIds,
    })
    console.log('res: ', res)

    showPop({ msg: 'משימות עודכנו בהצלחה', icon: 'success' })

    scrollBy(0, 200)
  }

  return (
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
                  onClick={() => {
                    tmpIndex = i
                    deleteTask()
                  }}>
                  <Icon name="trash" className="size-4" />
                </button>
              </div>
            </div>

            <TaskForm task={task} />
          </div>
        )
      })}

      <div className="flex justify-between mt-10">
        <Btn
          lbl={`משימה מס' ${tasks.length + 1}`}
          icon="plus"
          onClick={onNextTask}
          clr="soft"
          className="self-start"
        />

        {!editMode && (
          <div>
            <p className="text-sm text-gray-600 mb-1 mt-4">זהו שלב הביצוע האחרון לפרטים אלו?</p>

            <Btn lbl="שמור את כל המשימות" icon="floppy-disk" onClick={onSave} clr="solid" />
          </div>
        )}
        {editMode && (
          <div className="flex items-end mt-4">
            <Btn
              lbl="בטל עריכה"
              icon="xmark"
              clr="text"
              onClick={() => {
                setTasks([initialTask])
                setEditMode(false)
                setTmpParts([])
                scroll(0, 70)
              }}
            />
            <Btn lbl="שמור עריכה" icon="floppy-disk-pen" clr="solid" onClick={updateTask} />
          </div>
        )}
      </div>
    </div>
  )
}
