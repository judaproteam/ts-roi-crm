import TableHead from './TableHead'

export default function Table({ headNames, children }) {
  return (
    <main>
      <div className="flex flex-col">
        <div className="overflow-x-auto w-11/12">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <TableHead headNames={headNames} />

                <tbody className="divide-y divide-gray-200">
                  {/* <TaskTableRows rowsData={rowsData} /> */}
                  {children}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
