import MyBack from '../../components/Element/Back';

export default {
  title: 'Element/Back',
  component: MyBack,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyBack },
  template:
    '<my-back :label="label" />',
});

export const Back = Template.bind({});
Back.args = {
  label: '测试返回',
};
