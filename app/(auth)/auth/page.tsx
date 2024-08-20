'use client'

import Login from '@/auth/Login'
import { showPop } from 'jude_ui/pop'
import { insertUserNcompany } from '@/db/users/set'
import { Input } from 'jude_ui/form'
import { getFormData } from 'jude_ui/form/funcs'

export default function AuthPage() {
  return (
    <>
      <div className="grid grid-cols-2  w-screen bg-white place-items-center">
        <div className="grid place-items-center gap-6">
          <h1 className="text-5xl font-bold">
            ברוכים הבאים ל <span className={gradTxt}>RoiCrm</span>
          </h1>

          <div>
            <p className="text-lg">התחבר</p>
            <Login />
          </div>

          <div>
            <p className="text-lg mb-px">יצירת חשבון חדש</p>
            <button className="baseBtn border h-11 rounded w-60" popoverTarget="newProj">
              צור חשבון
            </button>
          </div>
        </div>

        <img src="auth_bg.jpg" alt="" className="w-full h-screen" />
      </div>
      <NewProjPop />
    </>
  )
}

function NewProjPop() {
  async function createAccount(e) {
    const data = getFormData(e)
    showPop({ msg: 'שומר משתמש...', icon: 'loading' })
    await insertUserNcompany(data)

    showPop({ msg: 'החשבון נוצר בהצלחה, התחבר עם חשבון המייל שלך', icon: 'success' })
  }

  return (
    <div popover="auto" className="pop" id="newProj">
      <h2 className="pb-2 mb-8 border-b text-xl">יצירת חשבון חברה</h2>
      <form className="min-w-52 grid grid-cols-2 gap-4" id="newProjForm" onSubmit={createAccount}>
        <Input lbl="שם פרטי" name="firstName" />
        <Input lbl="שם משפחה" name="lastName" />

        <Input lbl="שם החברה" name="companyName" />
        <Input lbl="מייל להתחברות" type="email" name="email" />
        <Input lbl="מספר טלפון" type="tel" name="phone" />

        <button className="btn col-span-2 mt-4">צור חשבון</button>
      </form>
    </div>
  )
}

const gradTxt =
  'bg-gradient-to-r from-blue-700 to-pink-700 inline-block text-transparent bg-clip-text font-black text-6xl'
