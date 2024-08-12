import Icon from '../Icon'

export default function PartPop({ obj, onEditSave }) {
  return (
    <div id="partPopover" popover="auto" className="rounded-xl border bg-slate-5 p-10 shadow-2xl">
      <div className="mb-8 flex gap-2 border-b pb-2">
        <Icon name="pen-to-square" className="" />
        <h2 className="">עריכת פרט</h2>
      </div>

      <form id="editForm" className="grid grid-cols-3 gap-8">
        <label className="input">
          <p>שם הפרט</p>

          <input type="text" name="name" defaultValue={obj.name} required />
        </label>

        <label className="input">
          <div>
            <p>סך כמות הפריט בפרויקט</p>
          </div>
          <input type="text" defaultValue={obj.qntt} name="qntt" required />
        </label>

        <label className="input col-span-3">
          <p>תאור הפרט</p>

          <textarea className="txtarea" name="desc" defaultValue={obj.desc} required />
        </label>

        <button className="btn-s col-span-3 mt-2" onClick={onEditSave}>
          <Icon name="floppy-disk-pen" type="sol" className="bg-white" />
          <p>שמור עריכה</p>
        </button>
      </form>
    </div>
  )
}
