import React from 'react';
import ReactDOM from 'react-dom';
import HeroImage from './HeroImage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeroImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
