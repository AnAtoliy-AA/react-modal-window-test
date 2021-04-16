import { IFormFields } from "../shared/interfaces";
import { action, observable } from "mobx";

const initialState = {
  name: "",
  surname: "",
};
export class UserFormStore {
  @observable
  formFieldsData: IFormFields = initialState;

  @action
  setUserFormData(formFieldsValue: IFormFields): void {
    this.formFieldsData = formFieldsValue;
  }
}
