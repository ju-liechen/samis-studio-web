import { Product } from 'components/product'

export default {
  title: 'Components/Product',
  component: Product,
  tags: ['autodocs'],
}

const Template = (args) => {
  return (
    <div style={{ background: '#ffdda2', padding: '20px' }}>
      {'  '}
      <Product {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Korok Leaf Coaster',
  price: 15,
  width: 5,
  length: 5,
}
