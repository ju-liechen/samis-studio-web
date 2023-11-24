import { Product } from 'components/product/product'

import styles from './product-grid.module.scss'

export const ProductGrid = ({}) => {
  return (
    <div className={styles.container}>
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
      <Product title="Korok Leaf Coaster" price={15} width={5} length={5} />
    </div>
  )
}
