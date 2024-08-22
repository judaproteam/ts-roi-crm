import Icon from 'zvijude/icon'

type DeletePopProps = {
  txt: string
  onDel: () => void
  id: string
}

export default function DelPop({ txt = '', onDel, id }: DeletePopProps) {
  function onClick() {
    document.getElementById(id)?.hidePopover()
    onDel()
  }

  return (
    <div id="delPop" popover="auto" className="pop">
      <div className="flex gap-3 border-b pb-1 mb-4">
        <Icon name="triangle-exclamation" />
        <p className="">פעולת מחיקה</p>
      </div>
      <p className="text-lg">{txt}</p>
      <button className="softBtn-s-r w-full mt-6" onClick={onClick}>
        <p>כן מחק</p>
        <Icon name="trash" />
      </button>
    </div>
  )
}
