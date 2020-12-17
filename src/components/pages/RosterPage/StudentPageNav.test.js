import React from 'react';
import ReactDOM from 'react-dom';
import StudentPageNav from './StudentPageNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentPageNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});