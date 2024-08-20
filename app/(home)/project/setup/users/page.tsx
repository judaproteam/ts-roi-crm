'use client'

import UserTable from '@/components/form/table/UserTable'
import Icon from 'jude_ui/icon'
import { getUsers } from '@/db/users/get'
import { insertUser } from '@/db/users/set'

import { Input, SelectObj } from 'jude_ui/form'

import { useEffect, useState } from 'react'

export default function users() {
  useEffect(() => {
    getUsers().then((users) => setUsers(users))
  }, [])

  const [users, setUsers] = useState<any>([])
  const [user, setUser] = useState<any>({})

  async function onSave(e) {
    const form = document.getElementById('userForm') as HTMLFormElement

    if (!form.checkValidity()) return

    e.preventDefault()
    const data = Object.fromEntries(new FormData(form))
    form.reset()
    setUsers([...users, data])
    await insertUser(data)
  }

  function onEditSave(e) {
    const popover = document.getElementById('userPopover') as HTMLDivElement
    const form = document.getElementById('editForm') as HTMLFormElement

    if (form.checkValidity()) {
      e.preventDefault()
      const data = new FormData(form)
      setUsers(
        users.map((u, i) => {
          if (i === user.index) {
            return Object.fromEntries(data)
          }
          return u
        })
      )

      // store.users[store.editUser.index] = Object.fromEntries(data)
      popover.hidePopover()
    }
  }

  function deleteUser() {
    const popover = document.getElementById('deletePopover') as HTMLDivElement
    // store.users.splice(store.editUser.index, 1)
    popover.hidePopover()
  }

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

            <button className="btn-s" onClick={onSave}>
              <Icon name="floppy-disk" type="sol" className="bg-white" />
              <p>שמור משתמש</p>
            </button>
          </div>

          <div className="mt-8 grid grid-cols-4 gap-10">
            <Input lbl="שם מלא" name="name" required />
            <SelectObj show="lbl" val="val" lbl="בחר תפקיד" name="role" list={options} />
            <Input lbl="טלפון נייד" name="phone" required />
            <Input lbl="מייל" name="email" />
          </div>
        </form>
      </section>

      {users.length > 0 && (
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

      <div id="userPopover" popover="auto" className="rounded-xl border bg-gray-50 p-10 shadow-2xl">
        <div className="mb-8 flex gap-2 border-b pb-2">
          <Icon name="pen-to-square" className="" />
          <h2 className="">עריכת משתמש</h2>
        </div>

        <form id="editForm" className="grid grid-cols-2 gap-8">
          <Input lbl="שם מלא" name="name" required />
          <SelectObj show="lbl" val="val" lbl="בחר תפקיד" name="role" list={options} />
          <Input lbl="טלפון נייד" name="phone" required />
          <Input lbl="מייל" name="email" />

          <button className="btn-s col-span-2 mt-2" onClick={onEditSave}>
            <Icon name="floppy-disk-pen" type="sol" className="bg-white" />
            <p>שמור עריכה</p>
          </button>
        </form>
      </div>

      <div
        id="deletePopover"
        popover="auto"
        className="rounded-xl border bg-gray-50 px-10 py-8 shadow-2xl">
        <div className="flex">
          <p className="text-lg font-semibold">למחוק את המשתמש {user.name} ?</p>
          <button className="btn-s mt-2 bg-red-700" onClick={deleteUser}>
            <Icon name="trash" type="sol" className="size-4 bg-white" />
            <p>מחק</p>
          </button>
        </div>
      </div>
    </main>
  )
}

// const options = ['מנהל ביצוע', 'מנהל פרוייקט', 'מתקין', 'עוזר מתקין']

const options = [
  { val: 'PRJ_MNGR', lbl: 'מנהל פרוייקט' },
  { val: 'INSTALLER', lbl: 'מתקין' },
  { val: 'ADMIN', lbl: 'אדמין' },
]
