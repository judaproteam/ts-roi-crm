// 'use client'

// import UserTable from '@/components/form/table/UserTable'
// import Icon from 'zvijude/icon'
// import { getUsers } from '@/db/users/get'
// import { addUser } from '@/db/users/set'
// import { Input, SelectObj } from 'zvijude/form'
// import { Btn } from 'zvijude/btns'

// import { useActionState } from 'react'
// import { useFormStatus } from 'react-dom'

// const initialState = {
//   message: '',
// }

// export default async function UsersPage({ searchParams: { prjId } }) {
//   const { pending } = useFormStatus()
//   const users = await getUsers({ prjId })

//   function deleteUser() {}
//   const tableHeaders = ['שם מלא', 'תפקיד', 'טלפון', 'מייל']

//   const sendServer = addUser.bind(null, prjId)
//   const [state, formAction] = useActionState(sendServer, initialState)

//   return (
//     <div className="wrap">
//       <form className="paper max-w-6xl" action={sendServer}>
//         <div className="flex items-end justify-between border-b pb-3">
//           <h2 className="flex gap-4 justify-end">
//             <Icon name="user-plus" type="reg" className="size-5" />
//             <span className="text-xl font-semibold">צור משתמש חדש</span>
//           </h2>

//           <Btn lbl="שמור משתמש" icon="floppy-disk" clr="solid" aria-disabled={pending} />
//         </div>

//         <div className="mt-8 grid grid-cols-5 gap-4">
//           <Input lbl="שם פרטי" name="firstName" />
//           <Input lbl="שם משפחה" name="lastName" />
//           <SelectObj show="lbl" val="val" lbl="בחר תפקיד" name="role" list={options} />
//           <Input lbl="טלפון נייד" name="phone" required />
//           <Input lbl="מייל" name="email" />
//         </div>

//         <p aria-live="polite" className="sr-only" role="status">
//           {state?.message}
//         </p>
//       </form>

//       <div className="max-w-4xl mt-8">
//         {users && (
//           <UserTable headNames={tableHeaders}>
//             {users.map((u, i) => {
//               return (
//                 <tr key={i} className="even:bg-blue-50/20">
//                   <td className="tblRow">{u.name}</td>
//                   <td className="tblRow">{u.role}</td>
//                   <td className="tblRow">{u.phone}</td>
//                   <td className="tblRow">{u.email}</td>
//                 </tr>
//               )
//             })}
//           </UserTable>
//         )}
//       </div>
//     </div>
//   )
// }

// // const options = ['מנהל ביצוע', 'מנהל פרוייקט', 'מתקין', 'עוזר מתקין']

// const options = [
//   { val: 'PRJ_MNGR', lbl: 'מנהל פרוייקט' },
//   { val: 'INSTALLER', lbl: 'מתקין' },
//   { val: 'ADMIN', lbl: 'אדמין' },
// ]
