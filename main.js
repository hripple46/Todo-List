import {
  pullToDoItemData,
  displayTodoItemForm,
  hideTodoItemForm,
  createObject,
  resetForm,
} from "./pullUserData.js";
import {
  displayDefaultList,
  resetRightColumn,
  addListNameOption,
  resetDropdown,
  addDropdownList,
} from "./dom.js";
import {
  displayNewListForm,
  hideNewListForm,
  setNewListName,
  newListName,
  addNewListNametoArray,
} from "./addLists.js";

const displayForm = document.querySelector("#displayForm");
let hideForm = document.querySelector("#submit");
const newList = document.querySelector("#newFolder");
const newListSubmit = document.querySelector("#submitProject");
const listInput = document.querySelector("#newProjectName");

let defaultList = [];
let listNames = [];

displayForm.addEventListener("click", () => {
  //show form
  displayTodoItemForm();
});

hideForm.addEventListener("click", () => {
  //reset the webpage to avoid duplicate todo items
  resetRightColumn();
  //grab data from form
  pullToDoItemData();
  //create Todo Item Object
  createObject(defaultList);
  //reset form
  resetForm();
  //hide form
  hideTodoItemForm();
  //display default list
  displayDefaultList(defaultList);
  addDropdownList(defaultList);
  addListNameOption(listNames);
});

//event listener for new-list button
newList.addEventListener("click", () => {
  //display form
  displayNewListForm();
});
//event listener for new-list submit button
newListSubmit.addEventListener("click", () => {
  hideNewListForm();
  setNewListName(listInput.value);
  resetDropdown();
  addNewListNametoArray(listNames);
  addDropdownList(defaultList);

  addListNameOption(listNames);
  console.log(listNames);
});
