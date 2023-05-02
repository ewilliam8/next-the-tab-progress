import React from 'react'
import Link from 'next/link'

import styles from "./NavMenu.module.scss"

type menuListType = {
  title: string
  href: string
}

const navMenuList: menuListType[] = [
  {
    title: "Dashboard",
    href: "/"
  },
  {
    title: "Progress",
    href: "/progress"
  },
  {
    title: "Balance",
    href: "/balance"
  },
  {
    title: "Roadmap",
    href: "/roadmap"
  },
  {
    title: "Information",
    href: "/info"
  },
  {
    title: "Settings",
    href: "/settings"
  },
]

const NavMenu: React.FC = () => {
  return (
    <ul className={`${styles["nav-menu"]}`}>
      {navMenuList.map((item) => {
        return (
          <Link href={item.href}>
            <li key={item.href} className={`${styles["nav-menu__item"]}`}>
              {item.title}
            </li>
          </Link>
        );
      })}
    </ul>
  )
}

export default NavMenu
