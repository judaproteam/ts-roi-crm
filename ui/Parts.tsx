"use client"

import Icon from "@/components/Icon"
import { Part } from "@prisma/client"
import { dltPart, crtPart, upPart, updateCache } from "@/db/actions/parts"
import { useState } from "react"
import TextInput from "@/components/form/TextInput"
import Textarea from "@/components/form/Textarea"
import Table from "@/components/form/table/Table"
import PartTableRows from "@/components/form/table/PartTableRows"

export default function Parts({ prts }) {
  const [tmpObj, setTmpObj] = useState({ index: 0, name: "", qntt: 0, dis: "", id: 0 })

  async function onSave(e: React.SyntheticEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    const partName = document.querySelector("[name=name]") as HTMLInputElement
    const exist = prts.find((p) => p.name === partName?.value)
    exist && partName.setCustomValidity("שם הפרט כבר קיים")
    //: partName.setCustomValidity("")

    if (!form.checkValidity()) return form.reportValidity()

    const data = new FormData(form)
    form.reset()

    const part = {
      ...(Object.fromEntries(data) as unknown as Part),
      qntt: parseInt(data.get("qntt") as string),
      prjId: global.prjId,
    }

    const res = await crtPart(part)

    console.log("res: ", res)

    partName.focus()
  }

  async function onEditSave(e: React.SyntheticEvent) {
    const form = e.target as HTMLFormElement

    if (form.checkValidity()) {
      e.preventDefault()
      const data = new FormData(form)

      const part = {
        ...(Object.fromEntries(data) as unknown as Part),
        qntt: parseInt(data.get("qntt") as string),
      }
      console.log("part: ", part)

      const id = tmpObj.id

      await upPart(id, part)

      const popover = document.getElementById("editPop") as HTMLDivElement
      popover.hidePopover()
    }
  }

  async function deletePart() {
    const popover = document.getElementById("delPop") as HTMLDivElement

    const res = await dltPart(tmpObj.id)

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
            <TextInput lbl="בחר את שם הפרט" field="name" placeholder="א-25" />
            <TextInput lbl="סך כמות הפריט בפרויקט" field="qntt" placeholder="16" type="number" />
            <Textarea lbl="הוסף את תיאור הפרט" field="dis" className="input col-span-3" />
          </div>
        </form>
      </section>

      {prts.length > 0 && (
        <section className="paper mt-0 w-4/5 mx-auto py-8">
          {/* <Table headNames={["מס'", "שם הפרט", "כמות", "תאור הפרט", "פעולה"]}> */}
          <Table headNames={["מס'", "שם הפרט", "כמות", "תאור הפרט"]}>
            <PartTableRows rowsData={prts} setTmpObj={setTmpObj} />
          </Table>
        </section>
      )}

      <div id="editPop" popover="auto" className="rounded-xl border bg-slate-50 p-10 shadow-2xl">
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

      <div id="delPop" popover="auto" className="bg-white p-8 rounded-md">
        <DeletePop
          txt={`בטוח למחוק את הפרט ${tmpObj.name}?`}
          onClick={() => {
            deletePart()
            document.getElementById("delPop")?.hidePopover()
          }}
        />
      </div>
    </main>
  )
}

const DeletePop = ({ txt = "", onClick }) => {
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
