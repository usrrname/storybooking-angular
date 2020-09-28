import { Meta, Story } from '@storybook/angular/types-6-0';

import { CommonModule } from '@angular/common';
import {FooterComponent} from './footer.component'
import { moduleMetadata } from '@storybook/angular/dist/client/preview/types';

export default {
  title: 'Bootstrap/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as Meta;


const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  component: FooterComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
