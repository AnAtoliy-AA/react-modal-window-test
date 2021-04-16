import React, { useState } from "react";
import "./UserForm.scss";
import { useStore } from "../../hooks/hooks";
import { observer } from "mobx-react-lite";
import { IFormFields } from "../../shared/interfaces";

const DEFAULT_FORM_TEXT = "Введите ваше имя и фамилию";
const NAME_PLACEHOLDER = "Имя";
const SURNAME_PLACEHOLDER = "Фамилия";
const SUBMIT_BUTTON_NAME = "Готово";
const DEFAULT_EMPTY_STRING = "";
const DEFAULT_MAX_SURNAME_LENGTH = 20;

const UserForm: React.FC = () => {
  const userFormStore = useStore("userFormStore");
  const modalWindowStore = useStore("modalWindowStore");

  const [nameValue, setNameValue] = useState(DEFAULT_EMPTY_STRING);
  const [surnameValue, setSurnameValue] = useState(DEFAULT_EMPTY_STRING);

  const handleNameInputChange = (event: any) => {
    setNameValue(event?.target.value);
  };

  const handleSurNameInputChange = (event: any) => {
    setSurnameValue(event?.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event?.preventDefault();
    const userFormData: IFormFields = {
      name: nameValue,
      surname: surnameValue,
    };

    userFormStore.setUserFormData(userFormData);
    modalWindowStore.setIsModalWindowOpen(true);

    setNameValue(DEFAULT_EMPTY_STRING);
    setSurnameValue(DEFAULT_EMPTY_STRING);
  };

  return (
    <>
      <h2>{DEFAULT_FORM_TEXT}</h2>
      <form className="user_form" onSubmit={handleFormSubmit}>
        <input
          className="input_text"
          type="text"
          value={nameValue}
          onChange={handleNameInputChange}
          placeholder={NAME_PLACEHOLDER}
          maxLength={DEFAULT_MAX_SURNAME_LENGTH}
          required
        />
        <input
          className="input_text"
          type="text"
          value={surnameValue}
          onChange={handleSurNameInputChange}
          placeholder={SURNAME_PLACEHOLDER}
          maxLength={DEFAULT_MAX_SURNAME_LENGTH}
          required
        />
        <button className="button button_save" type="submit">
          {SUBMIT_BUTTON_NAME}
        </button>
      </form>
    </>
  );
};

export default observer(UserForm);
