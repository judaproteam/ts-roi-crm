'use client'

import Icon from '@/components/Icon'
import { Part } from '@prisma/client'
import { useState } from 'react'
import TextInput from '@/components/form/TextInput'
import Textarea from '@/components/form/Textarea'
import Table from '@/components/form/table/Table'
import PartTableRows from '@/components/form/table/PartTableRows'
import { TmpPart } from '@/db/types'
import { sumBy } from '@/utils/func'
import { showPop } from '@/components/GlobalPopMsg'
import DelPop from '@/components/DelPop'
import { deletePart, insertPart, updatePart } from '@/db/parts/insert'

export default function Parts({ prts, prjId }) {
  const [tmpObj, setTmpObj] = useState({} as TmpPart)

  async function onSave(e: React.SyntheticEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    const partName = document.querySelector('[name=name]') as HTMLInputElement
    const exist = prts.find((p) => p.name === partName?.value.trim())
    if (exist) return showPop({ msg: 'שם הפרט כבר קיים', icon: 'error' })

    if (!form.checkValidity()) return form.reportValidity()
    showPop({ msg: 'שומר פרט...', icon: 'loading' })
    const data = new FormData(form)
    const part = {
      ...(Object.fromEntries(data) as unknown as Part),
      qntt: parseInt(data.get('qntt') as string),
      prjId,
    }

    const res = await insertPart(part)
    if (res.err) return showPop({ msg: 'שגיאה, פרט לא נשמר', icon: 'ban' })

    form.reset()
    console.log('res: ', res)
    showPop({ msg: 'פרט נשמר בהצלחה', icon: 'success' })

    partName.focus()
  }

  async function onEditSave(e: React.SyntheticEvent) {
    const form = e.target as HTMLFormElement

    if (form.checkValidity()) {
      e.preventDefault()
      const data = new FormData(form)

      const part = {
        ...(Object.fromEntries(data) as unknown as Part),
        qntt: parseInt(data.get('qntt') as string),
      }
      console.log('part: ', part)

      const id = tmpObj.id
      await updatePart({ id, data: part })

      const popover = document.getElementById('editPop') as HTMLDivElement
      popover.hidePopover()
    }
  }

  async function dltPart() {
    const popover = document.getElementById('delPop') as HTMLDivElement

    const res = await deletePart(tmpObj.id)

    popover.hidePopover()
  }

  return (
    <main className="">
      <section className="paper w-3/5 mx-auto">
        <form id="qntityForm" onSubmit={onSave}>
          <div className="flex items-end justify-between border-b pb-3">
            <h2 className="flex gap-4">
              <Icon name="table-list" type="reg" className="size-5" />
              <span className="text-xl font-semibold">צור כתב כמויות</span>
            </h2>

            <button className="btn-s">
              <Icon name="floppy-disk" type="sol" className="bg-white" />
              <p>שמור פרט</p>
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-8">
            <TextInput lbl="בחר את שם הפרט" field="name" placeholder="א-25" autoFocus={true} />
            <TextInput lbl="סך כמות הפריט בפרויקט" field="qntt" placeholder="16" type="number" />
            <Textarea lbl="הוסף את תיאור הפרט" field="dis" className="input col-span-3" />
          </div>
        </form>
      </section>

      {prts.length > 0 && (
        <section className="paper mt-0 w-4/5 mx-auto py-8">
          <Table headNames={["מס'", 'שם הפרט', 'כמות', 'תאור הפרט']}>
            <PartTableRows rowsData={prts} setTmpObj={setTmpObj} />
          </Table>
          <p className="font-semibold mt-8">סה"כ פרטים לפרוייקט : {sumBy(prts, 'qntt')}</p>
        </section>
      )}

      <div id="editPop" popover="auto" className="pop">
        <div className="mb-8 flex gap-2 border-b pb-2">
          <Icon name="pen-to-square" className="" />
          <h2 className="">עריכת פרט</h2>
        </div>

        <form id="editForm" onSubmit={onEditSave} className="grid grid-cols-3 gap-8">
          <TextInput
            lbl="בחר את שם הפרט"
            field="name"
            placeholder="א-25"
            defaultValue={tmpObj.name}
          />
          <TextInput
            lbl="סך כמות הפריט בפרויקט"
            field="qntt"
            placeholder="16"
            type="number"
            defaultValue={tmpObj.qntt}
          />
          <Textarea
            lbl="הוסף את תיאור הפרט"
            field="dis"
            className="input col-span-3"
            defaultValue={tmpObj.dis}
          />

          <button className="btn-s col-span-3 mt-2">
            <Icon name="floppy-disk-pen" type="sol" className="bg-white" />
            <p>שמור עריכה</p>
          </button>
        </form>
      </div>

      <DelPop txt={`בטוח למחוק את הפרט ${tmpObj.name}?`} onDel={dltPart} id="delPop" />
    </main>
  )
}
