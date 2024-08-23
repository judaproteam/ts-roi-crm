import { proxy, useSnapshot } from 'valtio'

type TUpdateUser = {
  id?: number
  firstName: string
  lastName: string
  role: string
  email: string
  phone: string
}

export const store = proxy<{ editUser: TUpdateUser }>({
  editUser: {
    id: 0,
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    phone: '',
  },
})

export function useSnap() {
  return useSnapshot(store)
}
