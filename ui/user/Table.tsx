import TableHead from '@/components/form/table/TableHead'
const headNames = ['שם מלא', 'תפקיד', 'טלפון', 'מייל', 'עריכה/מחיקה']

export default function UserTable({ children }) {
  return (
    <main className="bg-white shadow-1 rounded-lg p-2">
      <div className="flex flex-col">
        <div className="overflow-x-auto w-full">
          <div className="min-w-full inline-block align-middle">
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
