import Icon from 'jude_ui/icon'
import { arrayOf } from '@/utils/func'
import { insertQr } from '@/db/qr/insert'
import { getPartsByPrjWithTasksId } from '@/db/parts/get'
import { Input, Select, SelectJson } from 'jude_ui/form'

export default async function LocationForm({ prjId, qrNum }) {
  const prts = await getPartsByPrjWithTasksId(prjId)

  return (
    <main className="container p-6">
      <div className="flex items-end justify-between border-b pb-3  mb-8">
        <div className="flex gap-4">
          <Icon name="map-location-dot" type="reg" className="" />
          <p className="text-lg font-medium">קבע את המיקום הפריט</p>
        </div>
      </div>
      <form action={insertQr}>
        <section className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <Select lbl="מספר קומה" name="floor" list={arrayOf(-5, 100)} defaultValue="1" />
            <Select lbl="מספר דירה" name="aptNum" list={arrayOf(-5, 100)} defaultValue="1" />
          </div>
          <Input lbl="מיקום בדירה" name="locInApt" />
          <SelectJson lbl="סוג הפרט" show="name" name="prt" list={prts} />
          <Input lbl="" name="qrNum" value={qrNum} className="hidden" readOnly />
        </section>
        <button className="btn w-full mt-6">
          <Icon name="floppy-disk" type="sol" className="bg-white" />
          <p>שמור</p>
        </button>
      </form>
    </main>
  )
}
