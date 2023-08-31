import Icon from "./components/Icon.vue";
import AddButton from "./components/AddButton.vue";
import BaseInput from "./components/BaseInput.vue";
import Modal from "./components/Modal.vue";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    Icon: typeof Icon;
    AddButton: typeof AddButton;
    Modal: typeof Modal;
    BaseInput: typeof BaseInput;
  }
}
