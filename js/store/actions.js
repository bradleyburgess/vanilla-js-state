export default {
  changeCounter: function (state, payload) {
    switch (payload) {
      case "add": {
        state.counter++;
        break;
      }
      case "subtract": {
        state.counter--;
        break;
      }
    }
  },
};
