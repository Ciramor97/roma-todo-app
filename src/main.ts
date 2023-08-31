import { createApp } from "vue";
import { createPinia } from "pinia";

import "./style.css";
import App from "./App.vue";

import Icon from "./components/Icon.vue";
import AddButton from "./components/AddButton.vue";
import Modal from "./components/Modal.vue";
import BaseInput from "./components/BaseInput.vue";

const app = createApp(App);

app.use(createPinia());
app.component("Icon", Icon);
app.component("AddButton", AddButton);
app.component("Modal", Modal);
app.component("BaseInput", BaseInput);
// app.use(router)
app.mount("#app");
