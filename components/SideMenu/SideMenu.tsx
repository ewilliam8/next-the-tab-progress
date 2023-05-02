import React from "react"

import styles from "./SideMenu.module.scss"
import UserCard from "../User/UserCard/UserCard"
import NavMenu from "./NavMenu/NavMenu"

const SideMenu: React.FC = () => {
  return (
    <>
      <div className={`${styles["side-menu"]}`}>
        <h2 className={`${styles["side-menu__title"]}`}>
          The Tab Progress
        </h2>
        <UserCard />
        <NavMenu />
      </div>
    </>
  )
}

export default SideMenu
