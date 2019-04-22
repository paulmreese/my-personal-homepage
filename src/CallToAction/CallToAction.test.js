import React from 'react';
import ReactDOM from 'react-dom';
import CallToAction from './CallToAction';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CallToAction />, div);
  ReactDOM.unmountComponentAtNode(div);
});
