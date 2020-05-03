import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = () => {};

const store = createStore(reducer);

let count = 0;

number.innerText = count;

const updataText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updataText();
};

const handleMinus = () => {
  count = count - 1;
  updataText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
