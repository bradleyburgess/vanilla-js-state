import EventsHandler from "../lib/EventsHandler.js";

export default class Store {
  constructor({ state, actions }) {
    this.events = new EventsHandler();
    this.actions = actions;
    this.state = new Proxy(state, {
      set: (target, key, value) => {
        target[key] = value;
        this.events.publish(`${key}`, value);
        console.log(`${key} changed`);
        return true;
      },
    });
  }

  dispatch(actionKey, payload) {
    if (
      !this.actions[actionKey] ||
      typeof this.actions[actionKey] !== "function"
    ) {
      console.error(`Action “${actionKey}” does not exist`);
      return false;
    }
    return this.actions[actionKey](this.state, payload);
  }
}
