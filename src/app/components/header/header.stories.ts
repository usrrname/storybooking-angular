// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';

import ButtonComponent from '../button/button.component';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import { User } from 'src/app/models/types';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'BootStrap/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, HeaderComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    user: {'user': User}
  }
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    id: '1234',
    lastName: 'Chan',
    firstName: 'Jen',
    role: 'admin'
  } as User
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
