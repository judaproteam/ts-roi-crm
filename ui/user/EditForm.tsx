'use client'

import Icon from 'zvijude/icon'
import { editUser } from '@/db/users/edit'
import { Input, SelectObj } from 'zvijude/form'
import { Btn } from 'zvijude/btns'
import { getFormData } from 'zvijude/form/funcs'
import { showPop } from 'zvijude/pop'
import { store, useSnap } from '@/utils/store'

export default function EditForm() {
  const user = useSnap().editUser

  async function onUpdate(e) {
    const data = getFormData(e) as any
    data.id = user.id

    showPop({ msg: 'מעדכן משתמש...', icon: 'loading' })
    const res = await editUser(data)
    if (res.failed) return showPop({ msg: res.msg, icon: 'error' })
    showPop({ msg: 'המשתמש עודכן בהצלחה', icon: 'success' })
  }

  return (
    <form className="max-w-6xl pop" onSubmit={onUpdate} popover="auto" id="editUserForm">
      <div className="flex items-end justify-between border-b pb-3">
        <h2 className="flex gap-4 justify-end">
          <Icon name="user-pen" type="reg" className="size-5" />
          <span className="text-xl font-semibold">עדכון משתמש</span>
        </h2>

        <Btn lbl="שמור עדכון" icon="floppy-disk-pen" clr="solid" />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <Input
          lbl="שם פרטי"
          name="firstName"
          value={user.firstName}
          onChange={(e) => (store.editUser.firstName = e.target.value)}
        />
        <Input
          lbl="שם משפחה"
          name="lastName"
          value={user.lastName}
          onChange={(e) => (store.editUser.lastName = e.target.value)}
        />
        <SelectObj
          show="lbl"
          val="val"
          lbl="בחר תפקיד"
          name="role"
          list={options}
          value={user.role}
          onChange={(e) => (store.editUser.role = e.target.value)}
        />
        <Input
          lbl="מייל"
          name="email"
          value={user.email}
          onChange={(e) => (store.editUser.email = e.target.value)}
        />
        <Input
          lbl="טלפון נייד"
          name="phone"
          value={user.phone}
          onChange={(e) => (store.editUser.phone = e.target.value)}
        />
      </div>
    </form>
  )
}

const options = [
  { val: 'PRJ_MNGR', lbl: 'מנהל פרוייקט' },
  { val: 'INSTALLER', lbl: 'מתקין' },
  { val: 'ADMIN', lbl: 'אדמין' },
]
