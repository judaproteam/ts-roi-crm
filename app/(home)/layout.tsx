import { getUser } from '@/auth/authFuncs'
import '@/styles/globals.scss'
import UserProvider from '@/utils/userCtx'
import 'zvijude/style.css'
import GlobalPop from 'zvijude/pop'
import { Assistant } from 'next/font/google'

const font = Assistant({ subsets: ['latin'] })

export default async function RootLayout({ children }) {
  const user = await getUser()

  return (
    <html lang="he" dir="rtl">
      <body className={font.className}>
        <UserProvider data={user}>
          <GlobalPop />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
