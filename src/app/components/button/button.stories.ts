// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';
import { text, withKnobs } from '@storybook/addon-knobs';

import ButtonComponent from './button.component';

export default {
  title: 'Bootstrap/Button',
  component: ButtonComponent,
  decorators: [withKnobs],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {control: 'size'},
    value: {control: 'label'}
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: {
      ...args,
      label: text('value', args.label )
  }
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Regular = Template.bind({});
Regular.args = {
  size: 'lg',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};
