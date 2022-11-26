//object constructor for todo items
import { todoItem } from "./todo.js";
import { displayTodo } from "./dom.js";

const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  let inputs = document.querySelectorAll("input");
  let todoInput = [];
  for (let i = 0; i < inputs.length; i++) {
    todoInput.push(`${inputs[i].value}`);
  }

  console.log(todoInput);
  let newItem = todoItem(
    todoInput[0],
    todoInput[1],
    todoInput[2],
    todoInput[3]
  );
  displayTodo(newItem);
});
