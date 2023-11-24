import { Header } from 'components/header'

export const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default BasicLayout
