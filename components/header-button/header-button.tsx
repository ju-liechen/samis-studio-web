import styles from './header-button.module.scss'
import React from 'react'

export const HeaderButton = ({ text, isBold }) => {
  return (
    <div className={styles.container}>
      <button className={`${isBold ? styles.bold : ''} ${styles.button}`}>
        {text}
      </button>
      <div className={styles.hoverDiv} />
    </div>
  )
}
