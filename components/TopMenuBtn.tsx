"use client"

import { usePathname } from "next/navigation"
// import Link from "next/link"
import { Link } from "next-view-transitions"

import Icon from "./Icon"

export default function TopMenuBtn({ txt, href = "", icon }) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={`flex gap-3 border-slate-100 border-l last:border-l-0 h-full px-6 ${
        active && "bg-blue-50 text-whit ont-semibold"
      }`}>
      <Icon name={icon} className={`size-4 ${active && "bg-whit"}`} />
      {txt}
    </Link>
  )
}

{
  /* <Link href={href} className={`flex gap-3 h-full px-3 ${active && "bg-blue-700 text-white font-semibold"}`}>
      <Icon name={icon} type={active ? "reg" : "lit"} className={`size-4 ${active && "bg-white"}`} />
      {txt}
    </Link> */
}
