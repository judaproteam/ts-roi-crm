export default function TableHead({ headNames }) {
  return (
    <thead>
      <tr className="bg-blue-50">
        {headNames.map((name, i) => {
          return (
            <th key={i} scope="col" className={`px-6 py-3 text-start text-sm font-semibold}`}>
              {name}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}
