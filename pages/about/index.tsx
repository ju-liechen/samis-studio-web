import { BasicLayout } from 'components/layouts/basic-layout'
import styles from './about.module.scss'

const AboutPage = () => {
  return (
    <BasicLayout>
      <div className={styles.container}>This is the About Page!</div>
    </BasicLayout>
  )
}
export default AboutPage
