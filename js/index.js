import Display from "./components/Display.js";
import Button from "./components/Button.js";

const displayInstance = new Display({
  element: document.querySelector(".display"),
});

const buttonInstances = Array.from(document.querySelectorAll("button")).map(
  (button) => new Button({ element: button })
);

displayInstance.render();
