'use client'

import Icon from '@/components/Icon'
import Link from 'next/link'

export default function my_projects() {
  return (
    <main className="flex m-6 gap-4">
      {/* <button className="proj-btn" popoverTarget="projModal">
        <div>
          <Icon name="plus" className="size-6" type="reg" />
          <p>הוספת פרוייקט חדש</p>
        </div>
      </button> */}

      <Link href={`/project/3434343`} className="proj-btn" key={3434343}>
        <div>
          <Icon name="city" className="size-6" type="reg" />
          <p>פרויקט הדסים</p>
        </div>
      </Link>
      <Link href={`/project/3434343`} className="proj-btn" key={3434343}>
        <div>
          <Icon name="city" className="size-6" type="reg" />
          <p>פרויקט שרונים</p>
        </div>
      </Link>

      <ProjPop />
    </main>
  )
}

const ProjPop = () => {
  function onSave(e) {
    const modal = document.getElementById('projModal')
    const form = document.getElementById('newProjForm')

    // if (form.checkValidity()) {
    //   e.preventDefault()
    //   const data = new FormData(form)

    //   store.projs.push(Object.fromEntries(data))
    //   modal.hidePopover()
    // }
  }

  return (
    <div id="projModal" popover="auto" className="pop p-8 rounded-md">
      <h2 className="flex gap-4 border-b pb-2">
        <Icon name="city" type="reg" className="size-5" />
        <span className="text-xl font-semibold">הוסף את פרטי הפרוייקט</span>
      </h2>
      <form id="newProjForm" className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
        <label className="input">
          <p>שם הפרוייקט</p>
          <input type="text" name="name" required />
        </label>

        {/* <label className="input">
          <p>שם החברה</p>
          <input type="text" name="compName" required autoFocus />
        </label>

        <label className="input">
          <p>שם הבניין</p>
          <input type="text" name="building" required />
        </label>

        

        <label className="input">
          <p>כתובת הפרוייקט</p>
          <input type="text" name="address" required />
        </label> */}

        <button type="button" className="flex gap-3 text-blue-700 mt-2">
          <Icon name="file-arrow-up" type="reg" className="bg-blue-700" />
          <p className="font-semibold">העלה קבצים לפרוייקט</p>
        </button>

        <button className="btn mt-4 col-span-2 w-full" onClick={onSave}>
          <Icon name="floppy-disk" type="sol" className="bg-white" />
          <p>שמור</p>
        </button>
      </form>
    </div>
  )
}
