import UserTable from '@/components/form/table/UserTable'
import Icon from 'zvijude/icon'
import { getUsers } from '@/db/users/get'
import { addUser } from '@/db/users/set'

import { Input, SelectObj } from 'zvijude/form'
import { Btn } from 'zvijude/btns'

export default async function UsersPage({ searchParams: { prjId } }) {
  const users = await getUsers({ prjId })

  function deleteUser() {}
  const tableHeaders = ['שם מלא', 'תפקיד', 'טלפון', 'מייל']

  return (
    <main className="">
      <section className="paper">
        <form id="userForm">
          <div className="flex items-end justify-between border-b pb-3">
            <h2 className="flex gap-4 justify-end">
              <Icon name="user-plus" type="reg" className="size-5" />
              <span className="text-xl font-semibold">צור משתמש חדש</span>
            </h2>

            <Btn lbl="שמור משתמש" icon="floppy-disk" clr="solid" />
          </div>

          <div className="mt-8 grid grid-cols-4 gap-10">
            <Input lbl="שם מלא" name="name" required />
            <SelectObj show="lbl" val="val" lbl="בחר תפקיד" name="role" list={options} />
            <Input lbl="טלפון נייד" name="phone" required />
            <Input lbl="מייל" name="email" />
          </div>
        </form>
      </section>

      {users && (
        <UserTable headNames={tableHeaders}>
          {users.map((u, i) => {
            return (
              <tr key={i} className="even:bg-blue-50/20">
                <td className="tblRow">{u.name}</td>
                <td className="tblRow">{u.role}</td>
                <td className="tblRow">{u.phone}</td>
                <td className="tblRow">{u.email}</td>
              </tr>
            )
          })}
        </UserTable>
      )}
    </main>
  )
}

// const options = ['מנהל ביצוע', 'מנהל פרוייקט', 'מתקין', 'עוזר מתקין']

const options = [
  { val: 'PRJ_MNGR', lbl: 'מנהל פרוייקט' },
  { val: 'INSTALLER', lbl: 'מתקין' },
  { val: 'ADMIN', lbl: 'אדמין' },
]
