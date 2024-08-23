export default function Parts({ tmpParts, prtsNoGrp }) {
  return (
    <form>
      <div className="mt-6">
        <p className="font-bold mb-3">בחר פרטים מהרשימה ליצירת שלבי התקנה</p>
        <div className="flex gap-5">
          {[...tmpParts, ...prtsNoGrp].map((part) => {
            return (
              <label className="check" key={part.id}>
                <input type="checkbox" defaultChecked={part.check} name={part.id} />
                <p title={part.desc}>{part.name}</p>
              </label>
            )
          })}
        </div>
      </div>
    </form>
  )
}
