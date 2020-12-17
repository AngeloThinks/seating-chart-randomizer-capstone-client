import React from 'react';
import ReactDOM from 'react-dom';
import StudentPageMain from './StudentPageMain';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentPageMain />, div);
  ReactDOM.unmountComponentAtNode(div);
});