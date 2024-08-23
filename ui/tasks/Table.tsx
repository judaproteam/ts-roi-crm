import TableHead from '../../components/form/table/TableHead'

export default function Table({ headNames, children }) {
  return (
    <main className="bg-white shadow-1 rounded-lg p-2">
      <div className="flex flex-col">
        <div className="overflow-x-auto w-full">
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
      <HistoryPop />
    </main>
  )
}

function HistoryPop() {
  const headers = ["משימה מס'", 'כותרת המשימה', 'שם המבצע', 'תאריך ושעה']
  return (
    <div popover="auto" className="pop w-11/12" id="historyPop">
      <h2>הסטורית סריקות, מספר ברקוד 4</h2>
      <div className="flex flex-col">
        <div className="overflow-x-auto w-11/12">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <TableHead headNames={headers} />
                <tbody className="divide-y divide-gray-200">
                  <tr className="even:bg-blue-50/20">
                    <td className="tblRow">{1}#</td>
                    <td className="tblRow">יהודה צבי</td>
                    <td className="tblRow">22.1.24 14:22</td>
                  </tr>
                  <tr className="even:bg-blue-50/20">
                    <td className="tblRow">{2}#</td>
                    <td className="tblRow">יהודה צבי</td>
                    <td className="tblRow">22.1.24 14:22</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
