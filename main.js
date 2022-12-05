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
  eventListenerListNames,
} from "./addLists.js";
import { addIDTodoCard, addIDDropdownList } from "./setSpecificID.js";

const displayForm = document.querySelector("#displayForm");
let hideForm = document.querySelector("#submit");
const newList = document.querySelector("#newFolder");
const newListSubmit = document.querySelector("#submitProject");
const listInput = document.querySelector("#newProjectName");

let defaultList = [];
let listNames = [];

//event listener for opening new item form
displayForm.addEventListener("click", () => {
  //show form
  displayTodoItemForm();
});

//event listener for new todo item submission
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
  //add unique add to todoItem
  addIDTodoCard();
  //add unique ID to dropdownlist
  addIDDropdownList();
  eventListenerListNames(defaultList);
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
  //reset dropdown options to avoid duplicates
  resetDropdown();
  addNewListNametoArray(listNames);
  addDropdownList(defaultList);

  addListNameOption(listNames);
  eventListenerListNames(defaultList);
});
