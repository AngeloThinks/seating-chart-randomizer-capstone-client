import React from 'react';
import ReactDOM from 'react-dom';
import StudentListMain from './StudentListMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentListMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});