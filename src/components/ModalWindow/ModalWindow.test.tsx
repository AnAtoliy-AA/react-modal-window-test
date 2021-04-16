import React from 'react';
import ReactDOM from 'react-dom';
import ModalWindow from './ModalWindow';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalWindow />, div);
  ReactDOM.unmountComponentAtNode(div);
});