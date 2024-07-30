'use client'

import SelectInput from '@/components/form/SelectInput'
import TextInput from '@/components/form/TextInput'
import Icon from '@/components/Icon'
import { arrayOf, getFormData } from '@/utils/func'
import SelectObj from '@/components/form/SelectObj'
import { insertQr } from '@/db/qr/insert'

export default function LocationForm({ prjId, qrNum, prts }) {
  async function onSubmit(e) {
    const data = getFormData(e) as QrData
    data.prt = prts[data.prt]
    data.qrNum = qrNum

    console.log('data', data)

    const res = await insertQr(data)
    console.log('res', res)
  }

  return (
    <main className="container">
      <div className="flex items-end justify-between border-b pb-3  mb-8">
        <div className="flex gap-4">
          <Icon name="map-location-dot" type="reg" className="" />
          <p className="text-lg font-medium">קבע את המיקום הפריט</p>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <section className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <SelectInput lbl="מספר קומה" field="floor" list={arrayOf(-5, 100)} defaultValue="1" />
            <TextInput lbl="מספר דירה" field="aptNum" />
          </div>
          <TextInput lbl="מיקום בדירה" field="locInApt" />
          <SelectObj lbl="סוג הפרט" field="prt" list={prts.map((p) => p.name)} />
        </section>
        <button className="btn w-full mt-6">
          <Icon name="floppy-disk" type="sol" className="bg-white" />
          <p>שמור</p>
        </button>
      </form>
    </main>
  )
}

type QrData = {
  qrNum: number
  prjId: number
  floor: number
  aptNum: number
  locInApt: string
  prt: string
}
