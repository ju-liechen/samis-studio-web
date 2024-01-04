import { HamburgerMenu } from 'components/hamburger-menu'
import { HeaderButton } from 'components/header-button'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import Image from 'next/image'

import styles from './header.module.scss'
import React from 'react'

export const Header = () => {
  const router = useRouter()
  const currentPage = router.pathname
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 })

  return (
    <div className={styles.header}>
        <div className={styles.logo} onClick={() => router.push('/products')}>
          <Image
            src="/images/sami.png"
            width={355}
            height={200}
            alt="sami sleep"
          />
          <p className={styles.logoText}>Sami's Studio</p>
      </div>
      <div className={`${styles.buttons} ${isMobile ? styles['buttons-mobile'] : ''} ${isTablet ? styles['buttons-tablet'] : ''}`}>
      {isMobile ? (
          <HamburgerMenu />
        ) : (
          <>
            <HeaderButton
              text="PRODUCTS"
              isBold={true}
              destination="/products"
              currentPage={currentPage}
              onClick={() => router.push('/products')}
            />
            <HeaderButton
              text="COMMISSIONS"
              isBold={true}
              destination="/commissions"
              currentPage={currentPage}
              onClick={() => router.push('/commissions')}
            />
            <HeaderButton
              text="ABOUT"
              isBold={true}
              destination="/about"
              currentPage={currentPage}
              onClick={() => router.push('/about')}
            />
            <HeaderButton
              text="FAQ"
              isBold={true}
              destination="/faq"
              currentPage={currentPage}
              onClick={() => router.push('/faq')}
              />
          </>
        )}
        </div>
    </div>
  )
}