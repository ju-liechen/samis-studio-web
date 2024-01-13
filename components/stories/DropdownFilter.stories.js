import { DropdownFilter } from 'components/dropdown-filter'

export default {
  title: 'Components/DropdownFilter',
  component: DropdownFilter,
  tags: ['autodocs'],
  argTypes: {
    options: { control: { type: 'array' } },
  },
}

const Template = (args) => {
  return (
    <div style={{ background: '#ffdda2', height: '100vh', padding: '20px' }}>
      {'  '}
      <DropdownFilter {...args}/>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  options: ['A-Z', 'Price Increasing', 'Price Decreasing', 'Recently Added'],
}