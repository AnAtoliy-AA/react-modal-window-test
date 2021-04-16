import React from "react";
import { ModalWindowStore } from "./ModalWindowStore";
import { UserFormStore } from "./UserFormStore";

export const stores = Object.freeze({
  userFormStore: new UserFormStore(),
  modalWindowStore: new ModalWindowStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
