export default class EventsHandler {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
    return true;
  }

  publish(event, payload) {
    if (!this.events[event]) return false;
    return this.events[event].map((callback) => callback(payload));
  }
}
