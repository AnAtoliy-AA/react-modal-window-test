import { action, observable } from "mobx";

export class ModalWindowStore {
  @observable
  isModalWindowOpen: boolean = false;

  @action
  setIsModalWindowOpen(isModalWindowOpen: boolean): void {
    this.isModalWindowOpen = isModalWindowOpen;
  }
}
