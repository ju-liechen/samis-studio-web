import { HamburgerMenu } from 'components/hamburger-menu'

export default {
  title: 'Components/HamburgerMenu',
  component: HamburgerMenu,
  tags: ['autodocs'],
}

const Template = () => {
  return (
    <div style={{ background: '#ffdda2', padding: '20px', display: 'flex', justifyContent: 'right' }}>
      <HamburgerMenu />
    </div>
  )
}

export const Default = Template.bind({})