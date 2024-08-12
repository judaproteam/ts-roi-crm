import TableHead from './TableHead'

export default function UserTable({ headNames, children }) {
  return (
    <main className="paper">
      <div className="flex flex-col">
        <div className="overflow-x-auto w-11/12">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <TableHead headNames={headNames} />
                <tbody className="divide-y divide-gray-200">{children}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
