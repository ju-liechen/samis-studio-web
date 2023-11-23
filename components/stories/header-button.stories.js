import { HeaderButton } from 'components/header-button'

export default {
  title: 'Components/HeaderButton',
  component: HeaderButton,
  tags: ['autodocs'],
  argTypes: {
    isBold: { control: { type: 'boolean' } },
  },
}

export const Default = (args) => <HeaderButton {...args} />
Default.args = {
  text: 'COMMISSIONS',
  isBold: true,
}
