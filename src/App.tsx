import React from 'react';
import './App.scss';
import UserForm from './components/UserForm/UserForm';
import { observer } from 'mobx-react-lite';
import ModalWindow from './components/ModalWindow/ModalWindow';
import { useStore } from './hooks/hooks';

function App() {
  const modalWindowStore = useStore('modalWindowStore');
  return (
    <div className="App">
      <header className="App-header">
        <UserForm />
        {modalWindowStore.isModalWindowOpen && <ModalWindow />}
      </header>
    </div>
  );
}

export default observer(App);
