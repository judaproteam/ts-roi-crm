import { deleteTasksNParts } from '@/db/tasks/insert'
import { clone } from 'zvijude/funcs'
import Icon from 'zvijude/icon'
import { showPop } from 'zvijude/pop'
import Table from './Table'
import TaskTableRows from './TaskTableRows'
import { Btn } from 'zvijude/btns'

export default function TableTasks({
  grpTasks,
  parts,
  setTasks,
  oldTasks,
  oldParts,
  setTmpParts,
  setEditMode,
}) {
  async function deleteAllTasks() {
    if (!confirm('האם אתה בטוח שברצונך למחוק את כל המשימות?')) return

    showPop({ msg: 'מחיקת המשימות...', icon: 'loading' })
    oldParts = oldParts.map((el) => el.id)
    const res = await deleteTasksNParts({ tasks: oldTasks, partIds: oldParts })
    showPop({ msg: 'המשימות נמחקו בהצלחה', icon: 'success' })

    scrollBy(0, 200)
  }

  return (
    <section className="max-w-5xl mt-8">
      {grpTasks.map((grp) => {
        const grpParts = parts.filter((el) => el.tasksId === grp[0].tasksId)
        return (
          <main
            //className="py-14 first:pt-0 last:pb-0 border-b last:border-b-0 border-slate-300"
            key={grp[0].tasksId}>
            <div className="flex justify-between mb-2 gap-8 items-end">
              <div className="flex gap-4">
                <p className="font-bold">הפרטים לשלבי הביצוע:</p>
                {grpParts.map((part) => {
                  return (
                    <p title={part.desc} key={part.id}>
                      {part.name}
                    </p>
                  )
                })}
              </div>

              {/* TASKS Action Buttons */}
              <div className="flex gap-4">
                <Btn
                  lbl="עריכה"
                  icon="pen-to-square"
                  className="bg-white"
                  clr="text"
                  onClick={() => {
                    setTasks(clone(grp))
                    grpParts.forEach((el) => (el.check = true))
                    setTmpParts(grpParts)
                    setEditMode(true)
                    oldTasks = clone(grp)
                    oldParts = clone(grpParts)
                    scroll(0, 70)
                  }}
                />

                <Btn
                  lbl="מחיקה"
                  icon="trash"
                  className="bg-white"
                  clr="text"
                  onClick={() => {
                    oldTasks = clone(grp)
                    oldParts = clone(grpParts)
                    deleteAllTasks()
                  }}
                />
              </div>
            </div>

            <Table headNames={['משימה', 'כותרת', 'פירוט', 'בסיום המשימה']}>
              <TaskTableRows rowsData={grp} />
            </Table>
          </main>
        )
      })}
    </section>
  )
}
