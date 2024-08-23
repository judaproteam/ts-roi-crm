export default function TableHead({ headNames }) {
  return (
    <thead>
      <tr className="bg-slate-100">
        {headNames.map((name, i) => {
          return (
            <th key={i} scope="col" className="tblHead">
              {name}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
