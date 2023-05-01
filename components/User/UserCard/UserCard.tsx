import React from 'react'
import Image from 'next/image'

import styles from "./UserCard.module.scss"

const UserCard: React.FC = () => {
  return (
    <div className={`${styles["user-card"]}`}>
      <div className={`${styles["user-card__img"]}`}>
        <Image src={"/assets/icons/fi-rs-user.png"} alt="No Photo" width={24} height={24} />
      </div>
      <span className={`${styles["user-card__name"]}`}>
        User Name
      </span>
    </div>
  )
}

export default UserCard
