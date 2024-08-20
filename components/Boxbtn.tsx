'use client'

import { usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Icon, { IconNames } from 'jude_ui/icon'
// import Icon from 'jude_ui/icon'

type Props = {
  txt: string
  href?: string
  icon: IconNames
}

export default function Boxbtn({ txt, href = '', icon }: Props) {
  const params = useSearchParams()
  const prjId = params.get('prjId')

  const flip = ['hand-holding-dollar', 'chart-mixed', 'table-list'].includes(icon)

  return (
    <Link href={{ pathname: href, query: { prjId } }} className="boxbtn">
      <div>
        <Icon name={icon} className="size-6" type="reg" flip={flip} />
        <p>{txt}</p>
      </div>
    </Link>
  )
}
