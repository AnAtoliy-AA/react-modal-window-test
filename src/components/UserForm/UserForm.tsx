import React, { useState } from "react";
import "./UserForm.scss";
import { useStore } from "../../hooks/hooks";
import { observer } from "mobx-react-lite";
import { IFormFields } from "../../shared/interfaces";

const UserForm: React.FC = () => {
  const userFormStore = useStore("userFormStore");
  const modalWindowStore = useStore("modalWindowStore");

  const handleFormSubmit = (event: any) => {
    event?.preventDefault();
    const userName = event.target[0].value;
    const userSurname = event.target[1].value;
    const userFormData: IFormFields = { name: userName, surname: userSurname };

    userFormStore.setUserFormData(userFormData);
    modalWindowStore.setIsModalWindowOpen(true);
  };

  return (
    <div className="UserForm">
      UserForm Component
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="name" required />
        <input type="text" placeholder="surname" required />
        <button type="submit"> submit </button>
      </form>
    </div>
  );
};

export default observer(UserForm);
