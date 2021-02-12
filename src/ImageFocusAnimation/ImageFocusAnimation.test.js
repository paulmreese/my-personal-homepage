import React from 'react';
import ReactDOM from 'react-dom';
import ImageFocusAnimation from './ImageFocusAnimation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageFocusAnimation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
