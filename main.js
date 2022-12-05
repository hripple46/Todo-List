import {
  pullToDoItemData,
  displayTodoItemForm,
  hideTodoItemForm,
  createObject,
  resetForm,
} from "./pullUserData.js";

const displayForm = document.querySelector("#displayForm");
let hideForm = document.querySelector("#submit");

let defaultList = [];

displayForm.addEventListener("click", () => {
  //show form
  displayTodoItemForm();
});

hideForm.addEventListener("click", () => {
  //grab data from form
  pullToDoItemData();
  //create Todo Item Object
  createObject(defaultList);
  //reset form
  resetForm();
  //hide form
  hideTodoItemForm();

  console.log(defaultList);
});
