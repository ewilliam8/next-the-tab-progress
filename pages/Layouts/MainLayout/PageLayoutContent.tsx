import React, { ReactNode } from "react"

import styles from "./PageLayout.module.scss"

interface Props {
  child: ReactNode
}

const PageLayoutContent: React.FC<Props> = ({ child }) => {
  return <div className={`${styles["page-layout__content"]}`}>{child}</div>
}

export default PageLayoutContent
