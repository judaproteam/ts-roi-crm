'use client'

import Icon from 'zvijude/icon'
import { addUser } from '@/db/users/set'
import { Input, SelectObj } from 'zvijude/form'
import { Btn } from 'zvijude/btns'
import { getFormData } from 'zvijude/form/funcs'
import { showPop } from 'zvijude/pop'

export default function UserForm({ prjId }) {
  async function onSubmit(e) {
    showPop({ msg: 'שומר משתמש...', icon: 'loading' })
    const data = getFormData(e) as any

    const res = await addUser(prjId, data)
    if (res.failed) return showPop({ msg: res.msg, icon: 'error' })
    showPop({ msg: 'המשתמש נוצר בהצלחה', icon: 'success' })
    e.target.reset()
  }

  return (
    <form className="paper max-w-6xl" onSubmit={onSubmit}>
      <div className="flex items-end justify-between border-b pb-3">
        <h2 className="flex gap-4 justify-end">
          <Icon name="user-plus" type="reg" className="size-5" />
          <span className="text-xl font-semibold">צור משתמש חדש</span>
        </h2>

        <Btn lbl="שמור משתמש" icon="floppy-disk" clr="solid" />
      </div>

      <div className="mt-8 grid grid-cols-5 gap-4">
        <Input lbl="שם פרטי" name="firstName" />
        <Input lbl="שם משפחה" name="lastName" />
        <SelectObj show="lbl" val="val" lbl="בחר תפקיד" name="role" list={options} />
        <Input lbl="טלפון נייד" name="phone" required />
        <Input lbl="מייל" name="email" />
      </div>
    </form>
  )
}

const options = [
  { val: 'PRJ_MNGR', lbl: 'מנהל פרוייקט' },
  { val: 'INSTALLER', lbl: 'מתקין' },
  { val: 'ADMIN', lbl: 'אדמין' },
]
