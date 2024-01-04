import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { useMediaQuery } from 'react-responsive'

export const BasicLayout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <>
      <Header />
      {children}

      {isMobile ? (
        <div/>
      ) : (
        <Footer />)}
    </>
  )
}

export default BasicLayout
