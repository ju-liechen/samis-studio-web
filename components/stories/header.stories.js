import { Header } from 'components/header'

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
}

function Template(args) {
  return (
    <div>
      <Header />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
