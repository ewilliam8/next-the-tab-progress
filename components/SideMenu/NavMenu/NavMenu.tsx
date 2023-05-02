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
    href: "/preogress"
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
    title: "information",
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
          <li key={item.href} className={`${styles["nav-menu__item"]}`}>
            <a href={item.href}>
              <span className={`${styles["nav-menu__item-icon"]}`}>•</span>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  )
}

export default NavMenu
