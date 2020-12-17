import React from 'react';
import ReactDOM from 'react-dom';
import StudentListNav from './StudentListNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentListNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});