import React, { ReactNode } from "react"

import SideMenu from "@/components/SideMenu/SideMenu"
import styles from "./PageLayout.module.scss"

interface Props {
  children: ReactNode
}

export const PageLayoutWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className={`${styles["page-layout"]}`}>
      <SideMenu />
      <div className={`${styles["page-layout__inner"]}`}>{children}</div>
    </div>
  )
}

export default PageLayoutWrapper
