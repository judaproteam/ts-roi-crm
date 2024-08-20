import Navbtn from '../Navbtn'

export default function MainNav() {
  return (
    <>
      <section className="nav">
        <Navbtn txt="הפרוייקטים שלי" icon="city" href="/" />
        <Navbtn txt="פרויקט הדסים" icon="building" href="/project" />
        <Navbtn txt="הקמת פרויקט" icon="building-wheat" href="/project/setup" />
        <Navbtn txt="טבלת ביצועים" icon="qrcode" href="/project/qr_table" />
        <Navbtn txt="בעיות ביצוע" icon="triangle-exclamation" href="/project/test" />
        <Navbtn txt="בקשות חריגים" icon="hand-holding-dollar" href="/project/test" />
      </section>
      <div className="h-10" />
    </>
  )
}
