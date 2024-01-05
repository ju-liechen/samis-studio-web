import { Header } from 'components/header'
import { Footer } from 'components/footer'
import { useMediaQuery } from 'react-responsive'

export const BasicLayout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <>
      <Header />
      <div style={{ paddingTop: '110px' }}>
        {children}
      </div>

      {isMobile ? (
        <div/>
      ) : (
        <Footer />)}
    </>
  )
}

export default BasicLayout
