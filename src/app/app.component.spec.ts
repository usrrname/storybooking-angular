import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';

describe('AppComponent', () => {
  it('should render the component', async () => {
      const { getByText } = await render(AppComponent);
      expect(getByText('demo'));
    });
});
