//object constructor for todo items
let completeList = [];

import { todoItem } from "./todoObject.js";
import { displayTodo, resetDisplay } from "./dom.js";
import { pullData, todoInput } from "./pullUserData.js";
import { setID } from "./setSpecificID.js";

//event listener for new folder
const newForm = document.querySelector("#newForm");

//event listener for user submission
const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  resetDisplay();
  pullData();
  console.log(completeList);
  let newItem = todoItem(
    todoInput[0],
    todoInput[1],
    todoInput[2],
    todoInput[3]
  );
  completeList.push(newItem);
  for (let i = 0; i < completeList.length; i++) {
    displayTodo(completeList[i]);
  }
  setID(completeList);
  document.querySelector("form").reset();
  document
    .querySelector("#form")
    .setAttribute("class", "container-fluid d-none");
});

const popupForm = document.querySelector("#popupForm");
popupForm.addEventListener("click", () => {
  document
    .querySelector("#form")
    .setAttribute(
      "class",
      "container-fluid d-block position-absolute bg-warning bg-opacity-75 shadow-lg rounded mt-1"
    );
});
