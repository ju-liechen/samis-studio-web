import Image from 'next/image'

import styles from './product.module.scss'

type ProductProps = {
  title: string
  price: number
  width: number
  length: number
}

export const Product = ({ title, price, width, length }: ProductProps) => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/sample-rug.jpg"
        width={436}
        height={332}
        alt="korok leaf coaster"
      />
      <div className={styles.singleProduct}>
        <div className={styles.description}>
          <text className={styles.title}>{title}</text>
          <text className={styles.price}>${price}</text>
        </div>
        <text className={styles.dimensions}>
          {width}" x {length}"{' '}
        </text>
      </div>
    </div>
  )
}
