import { BasicLayout } from 'components/layouts/basic-layout'
import { ProductGrid } from 'components/product-grid'
import styles from './products.module.scss'

const ProductPage = () => {
  return (
    <BasicLayout>
      <div className={styles.container}>
        <ProductGrid />
      </div>
    </BasicLayout>
  )
}
export default ProductPage
