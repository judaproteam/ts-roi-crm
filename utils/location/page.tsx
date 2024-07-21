// "use client"

// import Icon from "@/components/Icon"
// import Link from "next/link"

// import { store } from "@/utils/valtio/store"
// import { useSnapshot } from "valtio"
// import CreateChips from "@/components/CreateChips"

// export default function location() {
//   const snap = useSnapshot(store)

//   return (
//     <main className="">
//       <section className="paper">
//         <div className="flex items-end justify-between border-b pb-3  mb-8">
//           <h2 className="flex gap-4">
//             <Icon name="map-location-dot" type="reg" className="size-5" />
//             <span className="text-xl font-semibold">ביצוע שאלון מיקום פריט</span>
//           </h2>
//         </div>

//         <p className="font-bold mb-6">בסריקה הראשונה יופיעו השאלות הבאות לפי סימון שלכם</p>
//         <div className="flex gap-10">
//           <label className="check">
//             <input type="checkbox" name="" id="" />
//             <p>שם הבניין</p>
//           </label>

//           <label className="check">
//             <input type="checkbox" name="" id="" />
//             <p>מספר קומה</p>
//           </label>

//           <label className="check">
//             <input type="checkbox" name="" id="" />
//             <p>מספר דירה</p>
//           </label>

//           <label className="check">
//             <input type="checkbox" name="" id="" />
//             <p>חזית</p>
//           </label>

//           <label className="check">
//             <input type="checkbox" name="" id="" />
//             <p>נישה</p>
//           </label>

//           <label className="check">
//             <input type="checkbox" name="" id="" />
//             <p>מיקום בדירה</p>
//           </label>
//         </div>

//         <p className="font-bold mt-12 mb-5">אפשרויות ידועות מראש לשדה</p>
//         <div className="grid gap-8">
//           <CreateChips lbl="חזית" opts={snap.hazit} field="hazit" />
//           <CreateChips lbl="מיקום בדירה" opts={snap.diraLoc} field="diraLoc" />
//         </div>
//       </section>
//     </main>
//   )
// }
