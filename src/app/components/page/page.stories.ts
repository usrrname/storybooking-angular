import * as HeaderStories from '../header/header.stories';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/angular/types-6-0';

import Button from '../button/button.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {PageComponent} from './page.component';
import { User } from 'src/app/models/types';
import { moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Example/Page',
  component: PageComponent,
  decorators: [
    moduleMetadata({
      declarations: [Button, HeaderComponent, FooterComponent],
      imports: [CommonModule],
      providers: [PageComponent]
    }),
  ],
  argTypes: {
    user: { 'user': User }
  }
} as Meta;

const Template: Story<PageComponent> = (args: PageComponent) => ({
  component: PageComponent
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
