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
});
