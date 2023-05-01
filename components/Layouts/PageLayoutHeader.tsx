import React from "react"
import styles from "./PageLayout.module.scss"

interface Props {
  title: string
}

const PageLayoutHeader: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className={`${styles["page-layout__header"]}`}>{title}</div>
    </>
  )
}

export default PageLayoutHeader
