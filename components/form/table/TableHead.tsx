export default function TableHead({ headNames }) {
  return (
    <thead>
      <tr className="bg-blue-50">
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
