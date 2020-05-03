import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (count = 0, action) => {
  //첫번째 방법
  // if (action.type === "ADD") {
  //   return (count = count + 1);
  // } else if (action.type === "MINUS") {
  //   return (count = count - 1);
  // } else {
  //   return count;
  // }

  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(reducer);

const listener = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(listener);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
