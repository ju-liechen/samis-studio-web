import { Header } from 'components/header'
import { Footer } from 'components/footer'

export const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default BasicLayout
