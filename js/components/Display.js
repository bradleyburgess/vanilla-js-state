import store from "../store/index.js";

export default class Display {
  constructor({ element }) {
    this.element = element;
    store.events.subscribe("counter", () => this.render());
  }

  render() {
    console.log("Display rendered");
    this.element.innerText = store.state.counter;
  }
}
