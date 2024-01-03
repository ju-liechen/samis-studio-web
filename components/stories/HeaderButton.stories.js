import { HeaderButton } from 'components/header-button'

export default {
  title: 'Components/HeaderButton',
  component: HeaderButton,
  tags: ['autodocs'],
  argTypes: {
    isBold: { control: { type: 'boolean' } },
  },
}

export const Products = (args) => <HeaderButton {...args} />
Products.args = {
  text: 'PRODUCTS',
  isBold: true,
}

export const Commissions = (args) => <HeaderButton {...args} />
Commissions.args = {
  text: 'COMMISSIONS',
  isBold: true,
}

export const About = (args) => <HeaderButton {...args} />
About.args = {
  text: 'ABOUT',
  isBold: true,
}
