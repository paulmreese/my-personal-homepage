import React from 'react';
import ReactDOM from 'react-dom';
import StickyHeader from './StickyHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StickyHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
