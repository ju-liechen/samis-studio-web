import styles from './header-button.module.scss'
import React from 'react'

type HeaderButtonProps = {
  text: string
  isBold: boolean
  destination: string
  currentPage: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const HeaderButton = ({
  text,
  isBold,
  destination,
  currentPage,
  onClick,
}: HeaderButtonProps) => {
  const isActive = currentPage === destination
  return (
    <div className={styles.container}>
      <button
        className={`${isBold ? styles.bold : ''} ${styles.button}`}
        onClick={onClick}
      >
        {text}
      </button>
      <div className={`${styles.hoverDiv} ${isActive ? styles.active : ''}`} />
    </div>
  )
}
