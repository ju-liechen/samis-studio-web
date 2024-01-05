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
  destination: 'products',
  currentPage: '',
}

export const Commissions = (args) => <HeaderButton {...args} />
Commissions.args = {
  text: 'COMMISSIONS',
  isBold: true,
  destination: 'commissions',
  currentPage: '',
}

export const About = (args) => <HeaderButton {...args} />
About.args = {
  text: 'ABOUT',
  isBold: true,
  destination: 'about',
  currentPage: '',
}
