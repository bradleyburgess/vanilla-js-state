import store from "../store/index.js";

export default class Button {
  constructor({ element }) {
    this.element = element;
    element.onclick = () =>
      store.dispatch("changeCounter", element.dataset.func);
  }
}
