import React from 'react';
import ReactDOM from 'react-dom';
import Classes from './Classes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Classes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
