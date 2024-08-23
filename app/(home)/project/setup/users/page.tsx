import { getUsers } from '@/db/users/get'
import UserForm from '@/ui/user/UserForm'
import Table from '@/ui/user/Table'
import Body from '@/ui/user/Body'
import EditForm from '@/ui/user/EditForm'

export default async function UsersPage({ searchParams: { prjId } }) {
  const users = await getUsers({ prjId })

  return (
    <div className="wrap">
      <UserForm prjId={prjId} />

      <div className="max-w-4xl mt-8">
        {users && (
          <Table>
            <Body users={users} />
          </Table>
        )}
      </div>

      <EditForm />
    </div>
  )
}
