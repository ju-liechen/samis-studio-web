import Image from 'next/image'

import styles from './product.module.scss'

type ProductProps = {
  title: string
  price: number
  width: number
  length: number
  image: string
}

export const Product = ({ title, price, width, length, image }: ProductProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        width={436}
        height={332}
        alt={title}
      />
      <div className={styles.singleProduct}>
        <div className={styles.description}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>${price}</div>
        </div>
        <div className={styles.dimensions}>
          {width}" x {length}"{' '}
        </div>
      </div>
    </div>
  )
}
