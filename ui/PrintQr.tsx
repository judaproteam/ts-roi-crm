import Icon from '@/components/Icon'
import { get } from 'http'
import QR from 'react-qr-code'

export default function PrintQr({ prtsQntt }) {
  console.log('prtsQntt: ', prtsQntt)

  return (
    <main className="flex items-start gap-0">
      <section className="paper w-3/4 mx-auto">
        <h2 className="flex gap-4 border-b pb-2">
          <Icon name="print" type="reg" className="size-5" />
          <span className="text-xl font-semibold">הדפסת בר-קוד QR</span>
        </h2>

        <div className="flex gap- mt-8">
          {new Array(prtsQntt).fill(0).map((k, i) => {
            return (
              <div className="border rounded p-4 shadow">
                <p>{i + 1}</p>
                <QR
                  value={'https://roi-mobile-app.vercel.app/part_location'}
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

// "use client"

// import Icon from "@/components/Icon"
// import { genId } from "@/utils/func"
// import { store } from "@/utils/valtio/store"
// import { useSnapshot } from "valtio"
// import QR from "react-qr-code"
// import { Html5Qrcode } from "html5-qrcode"
// import { useEffect } from "react"

// let scn
// export default function print() {
//   const snap = useSnapshot(store)

//   useEffect(() => {
//     scn = new Html5Qrcode("reader")
//   }, [])

//   function onCamera(params) {
//     const cmrId = "fe71ac70d51aa5076d3002b5bfa0e41c3c62fd4c231235bab53ae528448c5e5f"
//     scn.start({ facingMode: "environment" }, {}, (decodedText, decodedResult) => {
//       console.log("decodedText: ", decodedText)
//       scn.stop()
//     })
//   }

//   async function getCmrs() {
//     const cmrs = await Html5Qrcode.getCameras()
//     console.log(cmrs)
//     return cmrs[0].id
//   }

//   function onScanSuccess(decodedText, decodedResult) {
//     console.log(`Code matched = ${decodedText}`, decodedResult)
//   }

//   function onScanFailure(error) {
//     console.warn(`Code scan error = ${error}`)
//   }

//   return (
//     <main className="flex items-start gap-0">
//       <section className="paper w-3/4 mx-auto">
//         <h2 className="flex gap-4 border-b pb-2">
//           <Icon name="print" type="reg" className="size-5" />
//           <span className="text-xl font-semibold">הדפסת בר-קודים QR</span>
//         </h2>

//         <button onClick={onCamera} className="bg-blue-700 py-2 px-3 rounded mt-12 text-white block">
//           סרוק QR dd
//         </button>

//         <QR value="google.com" className="m-4 size-36" />

//         <div id="reader" className="size-96"></div>
//       </section>
//     </main>
//   )
// }
