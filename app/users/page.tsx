export default function users() {
  return <div>users</div>
}

// "use client"

// import Icon from "@/components/Icon"
// import Link from "next/link"

// import { store } from "@/utils/valtio/store"
// import { useSnapshot } from "valtio"

// export default function users() {
//   const snap = useSnapshot(store)

//   function onSave(e) {
//     const form = document.getElementById("userForm") as HTMLFormElement

//     if (form.checkValidity()) {
//       e.preventDefault()
//       const data = new FormData(form)
//       form.reset()
//       store.users.push(Object.fromEntries(data))
//     }
//   }

//   function onEditSave(e) {
//     const popover = document.getElementById("userPopover") as HTMLDivElement
//     const form = document.getElementById("editForm") as HTMLFormElement

//     if (form.checkValidity()) {
//       e.preventDefault()
//       const data = new FormData(form)

//       store.users[store.editUser.index] = Object.fromEntries(data)
//       popover.hidePopover()
//     }
//   }

//   function deleteUser() {
//     const popover = document.getElementById("deletePopover") as HTMLDivElement
//     store.users.splice(store.editUser.index, 1)
//     popover.hidePopover()
//   }

//   return (
//     <main className="">
//       <section className="paper">
//         <form id="userForm">
//           <div className="flex items-end justify-between border-b pb-3">
//             <h2 className="flex gap-4">
//               <Icon name="user-plus" type="reg" className="size-5" />
//               <span className="text-xl font-semibold">צור משתמש חדש</span>
//             </h2>

//             <button className="btn-s" onClick={onSave}>
//               <Icon name="floppy-disk" type="sol" className="bg-white" />
//               <p>שמור משתמש</p>
//             </button>
//           </div>

//           <div className="mt-8 grid grid-cols-4 gap-8">
//             <label className="input">
//               <p>שם מלא</p>
//               <input type="text" name="name" required />
//             </label>

//             <label className="slct">
//               <div>
//                 <p>בחר תפקיד</p>
//                 <Link href={""}>הרשאות יחולו בהתאם</Link>
//               </div>
//               <select id="slct" name="role">
//                 {options.map((op) => {
//                   return <option value={op}>{op}</option>
//                 })}
//               </select>
//             </label>

//             <label className="input">
//               <div>
//                 <p>טלפון נייד</p>
//                 <span>להתחברות למערכת</span>
//               </div>
//               <input type="text" name="phone" required />
//             </label>

//             <label className="input">
//               <div>
//                 <p>מייל</p>
//                 <span>לקבלת התראות</span>
//               </div>
//               <input type="text" name="email" />
//             </label>
//           </div>
//         </form>
//       </section>

//       {snap.users.length > 0 && (
//         <section className="paper mt-0 max-w-4xl">
//           {/* <h2>משתמשים</h2> */}

//           <div className="tbl font-bold  mb-2">
//             <p>שם מלא</p>
//             <p>תפקיד</p>
//             <p>טלפון</p>
//             <p>מייל</p>
//             <p className="col-span-2" />
//           </div>

//           {snap.users.map((u, i) => {
//             return (
//               <div className="tbl border-t odd:bg-slate-50 py-2" key={i}>
//                 <p>{u.name}</p>
//                 <p>{u.role}</p>
//                 <p>{u.phone}</p>
//                 <p>{u.email}</p>

//                 <div className="col-span-2 flex gap-4 justify-self-end pr-4 text-sm">
//                   <button
//                     className="flex gap-0 text-blue-700"
//                     onClick={() => {
//                       store.editUser = { ...u, index: i }
//                     }}
//                     popovertarget="userPopover">
//                     <Icon name="pen-to-square" className="size-3.5 bg-blue-700" />
//                     <p>עריכה</p>
//                   </button>
//                   <button
//                     className="flex gap-0 text-red-700"
//                     popovertarget="deletePopover"
//                     onClick={() => {
//                       store.editUser = { ...u, index: i }
//                     }}>
//                     <Icon name="trash" className="size-3.5 bg-red-700" />
//                     <p>מחיקה</p>
//                   </button>
//                 </div>
//               </div>
//             )
//           })}
//         </section>
//       )}

//       <div id="userPopover" popover="auto" className="rounded-xl border bg-gray-50 p-10 shadow-2xl">
//         <div className="mb-8 flex gap-2 border-b pb-2">
//           <Icon name="pen-to-square" className="" />
//           <h2 className="">עריכת משתמש</h2>
//         </div>

//         <form id="editForm" className="grid grid-cols-2 gap-8">
//           <label className="input">
//             <p>שם מלא</p>
//             <input type="text" name="name" defaultValue={snap.editUser.name} required />
//           </label>

//           <label className="slct">
//             <div>
//               <p>בחר תפקיד</p>
//               <Link href={""}>הרשאות יחולו בהתאם</Link>
//             </div>
//             <select id="slct" name="role" required>
//               {options.map((op) => {
//                 return (
//                   <option value={op} selected={snap.editUser.role === op}>
//                     {op}
//                   </option>
//                 )
//               })}
//             </select>
//           </label>

//           <label className="input">
//             <div>
//               <p>טלפון נייד</p>
//               <span>להתחברות למערכת</span>
//             </div>
//             <input type="text" defaultValue={snap.editUser.phone} name="phone" required />
//           </label>

//           <label className="input">
//             <div>
//               <p>מייל</p>
//               <span>לקבלת התראות</span>
//             </div>
//             <input type="text" name="email" defaultValue={snap.editUser.email} />
//           </label>

//           <button className="btn-s col-span-2 mt-2" onClick={onEditSave}>
//             <Icon name="floppy-disk-pen" type="sol" className="bg-white" />
//             <p>שמור עריכה</p>
//           </button>
//         </form>
//       </div>

//       <div
//         id="deletePopover"
//         popover="auto"
//         className="rounded-xl border bg-gray-50 px-10 py-8 shadow-2xl">
//         <div className="flex">
//           <p className="text-lg font-semibold">למחוק את המשתמש {snap.editUser.name} ?</p>
//           <button className="btn-s mt-2 bg-red-700" onClick={deleteUser}>
//             <Icon name="trash" type="sol" className="size-4 bg-white" />
//             <p>מחק</p>
//           </button>
//         </div>
//       </div>
//     </main>
//   )
// }

// const options = ["מנהל ביצוע", "מנהל פרוייקט", "מתקין", "עוזר מתקין"]
