import { BasicLayout } from './basic-layout'

export default {
  title: 'Layouts/BasicLayout',
  component: BasicLayout,
}

const Template = (props) => <BasicLayout {...props} />

export const Basic = Template.bind({})
Basic.args = {
  children: (
    <div style={{ background: '#afafaf', padding: '1em' }}>CHILDREN</div>
  ),
}
