import { ProductGrid } from 'components/product-grid'

export default {
  title: 'Components/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
}

const Template = (args) => {
  return (
    <div style={{ background: '#ffdda2', padding: '20px' }}>
      {'  '}
      <ProductGrid {...args} />
    </div>
  )
}

export const Default = Template.bind({})
