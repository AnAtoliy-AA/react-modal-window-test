import { IFormFields } from "../shared/interfaces";
import { action, observable } from "mobx";

const initialState = {
  name: "",
  surname: "",
};
export class UserFormStore {
  @observable
  formFieldsValue: IFormFields = initialState;

  @action
  setGameSettings(formFieldsValue: IFormFields): void {
    this.formFieldsValue = formFieldsValue;
  }
}
