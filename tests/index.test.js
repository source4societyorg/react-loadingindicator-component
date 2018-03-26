import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from '../src/index';

test('LoadingIndicator renders without problems', () => {
  const renderComponent = shallow(<LoadingIndicator />);
  renderComponent.render();
});
