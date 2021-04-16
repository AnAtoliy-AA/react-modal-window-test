import React from "react";
import { useStore } from "../../hooks/hooks";
import "./ModalWindow.scss";

const MODAL_WINDOW_DEFAULT_TEXT = "Здравствуйте,";
const CLOSE_BUTTON_TEXT = "Закрыть";

const ModalWindow: React.FC = () => {
  const userFormStore = useStore("userFormStore");
  const modalWindowStore = useStore("modalWindowStore");

  const handleCloseButton = () => {
    modalWindowStore.setIsModalWindowOpen(false);
  };

  return (
    <>
      <div className="ModalWindow">
        {MODAL_WINDOW_DEFAULT_TEXT} {userFormStore.formFieldsData.name}{" "}
        {userFormStore.formFieldsData.surname}
        <button className="button button_danger" onClick={handleCloseButton}>
          {CLOSE_BUTTON_TEXT}
        </button>
      </div>
    </>
  );
};

export default ModalWindow;
