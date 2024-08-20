import Navbtn from '../Navbtn'

export default function SetupNav() {
  const basePath = '/project/setup/'

  return (
    <>
      <section className="nav top-10">
        <Navbtn txt="כתב כמויות" icon="table-list" href={basePath + 'parts'} />
        <Navbtn txt="שלבי ביצוע" icon="screwdriver-wrench" href={basePath + 'tasks'} />
        <Navbtn txt="הדפסת QR" icon="print" href={basePath + 'print'} />
        <Navbtn txt="משתמשים" icon="users" href={basePath + 'users'} />
      </section>
      <div className="h-10" />
    </>
  )
}
