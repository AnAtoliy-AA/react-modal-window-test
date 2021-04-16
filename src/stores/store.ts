import React from "react";
import { UserFormStore } from "./UserFormStore";
export const stores = Object.freeze({
  userFormStore: new UserFormStore(),
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
