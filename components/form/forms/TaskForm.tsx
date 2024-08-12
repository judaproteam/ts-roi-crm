// import Textarea from '../Textarea'
import { Textarea, Input } from 'jude_ui'
import TextInput from '../TextInput'

export default function TaskForm({ task }) {
  return (
    <form name="taskForm" className="grid grid-cols-4 gap-8 items-start mt-4">
      <input type="text" name="id" defaultValue={task.id} className="hidden" readOnly />

      <Input
        lbl="כותרת למשימה"
        name="title"
        defaultValue={task.title}
        placeholder="כותרת המשימה לביצוע"
      />

      <Textarea
        lbl="פירוט המשימה"
        name="desc"
        defaultValue={task.desc}
        placeholder="פרטי המשימה לביצוע"
        className="col-span-2"
      />

      <div className="">
        <h2 className="font-bold mb-2">חובה בסיום המשימה</h2>
        <div className="fle">
          <label className="check">
            <input type="checkbox" name="pic" defaultChecked={task.pic} />
            <p>לעלות תמונה</p>
          </label>
          <label className="check">
            <input type="checkbox" name="vid" defaultChecked={task.vid} />
            <p>לעלות סרטון</p>
          </label>
          <label className="check">
            <input type="checkbox" name="mngr" defaultChecked={task.mngr} />
            <p>בדיקה ואישור מנהל</p>
          </label>
        </div>
      </div>
    </form>
  )
}
