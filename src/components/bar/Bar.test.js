import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Bar';

const props = {
  onSubmit: () => {}
};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component {...props} />, div);
});
