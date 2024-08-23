'use client'

import { deleteUser } from '@/db/users/delete'
import { store } from '@/utils/store'
import Icon from 'zvijude/icon'
import { showPop } from 'zvijude/pop'

export default function Body({ users }) {
  async function onDelete(user) {
    if (!confirm(`האם אתה בטוח שברצונך למחוק את המשתמש ${user.name}?`)) return

    showPop({ msg: 'מחיקת משתמש...', icon: 'loading' })
    const res = await deleteUser(user.id)
    if (res.failed) return showPop({ msg: res.msg, icon: 'error' })
    showPop({ msg: 'המשתמש נמחק בהצלחה', icon: 'success' })
  }

  return (
    <>
      {users.map((u, i) => {
        return (
          <tr key={i} className="hover:bg-blue-50/20">
            <td className="tblRow">{u.name}</td>
            <td className="tblRow">{u.role}</td>
            <td className="tblRow">{u.phone}</td>
            <td className="tblRow">{u.email}</td>
            <td className="tblRow">
              <div className=" flex">
                <button onClick={() => (store.editUser = u)} popoverTarget="editUserForm">
                  <Icon name="pen" className="size-3.5" />
                </button>
                <button onClick={() => onDelete(u)}>
                  <Icon name="trash" className="size-3.5 cursor-pointer" />
                </button>
              </div>
            </td>
          </tr>
        )
      })}
    </>
  )
}
