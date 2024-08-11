import Icon from '@/components/Icon'
import { arrayOf } from '@/utils/func'
import QR from 'react-qr-code'

export default function PrintQr({ prtsQntt, prjId }) {
  return (
    <main className="flex items-start gap-0">
      <section className="paper w-3/4 mx-auto">
        <h2 className="flex gap-4 border-b pb-2">
          <Icon name="print" type="reg" className="size-5" />
          <span className="text-xl font-semibold">הדפסת בר-קוד QR</span>
        </h2>

        <div className="flex gap- mt-8">
          {arrayOf(0, 20).map((k, i) => {
            return (
              <div className="border rounded p-4 shadow border-slate-500 text-black">
                <div className="flex justify-between items-start mb-6">
                  <span>
                    <h2>פרוייקט הדסים</h2>
                    <h3>בניין B</h3>
                  </span>
                  <p>{i + 1}#</p>
                </div>
                <QR
                  value={`https://roi-crmy.vercel.app/qr/${prjId}/${i + 1}`}
                  className="m-4 size-36"
                />
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
