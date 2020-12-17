import React from 'react';
import ReactDOM from 'react-dom';
import AddRoster from './AddRoster';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddRoster />, div);
  ReactDOM.unmountComponentAtNode(div);
});