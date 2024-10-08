import GlobalPopMsg from 'zvijude/pop'
import '@/styles/globals.scss'
import { Assistant } from 'next/font/google'

const font = Assistant({ subsets: ['latin'] })

export const metadata = {
  title: 'Roi Crm',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={font.className}>
        <GlobalPopMsg />

        {children}
      </body>
    </html>
  )
}
