import { useRouter } from 'next/router'

import styles from './header.module.scss'
import React from 'react'

export const Header = () => {
  const router = useRouter()

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.logo} onClick={() => router.push('/')}>
          Sami's Studio
        </div>
      </div>
    </div>
  )
}
