//object constructor for todo items
import { todoItem } from "./todoObject.js";
import { displayTodo } from "./dom.js";
import { pullData, todoInput } from "./pullUserData.js";

//event listener for user submission
const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  pullData();
  let newItem = todoItem(
    todoInput[0],
    todoInput[1],
    todoInput[2],
    todoInput[3]
  );

  displayTodo(newItem);
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
