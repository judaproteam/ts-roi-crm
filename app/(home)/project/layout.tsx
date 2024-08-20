import MainNav from '@/components/layout/MainNav'

export default function SetupLayout({ children }) {
  return (
    <div>
      <MainNav />
      <div>{children}</div>
    </div>
  )
}
