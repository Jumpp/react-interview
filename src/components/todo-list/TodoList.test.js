import React from 'react';
import ReactDOM from 'react-dom';
import Component from './TodoList';

const props = {};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component {...props} />, div);
});
