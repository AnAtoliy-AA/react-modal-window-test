import React from 'react';
import { useStore } from '../../hooks/hooks';
import './ModalWindow.scss';

const ModalWindow: React.FC = () => {
  const userFormStore = useStore('userFormStore');
 return ( 
 <div className="ModalWindow">
   {userFormStore.formFieldsData.name}{userFormStore.formFieldsData.surname}
  </div>
)};

export default ModalWindow;
