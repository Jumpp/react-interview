import React from 'react';
import ReactDOM from 'react-dom';
import Component from './TodoItem';

const props = {
  onClick: () => {},
  onDelete: () => {},
  data: { id: 0, complete: false, name: 'hieno todo esimerkki' }
};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component {...props} />, div);
});
