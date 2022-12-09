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
  addDeleteBtn,
  displayUniqueList,
  collapseDetails,
} from "./dom.js";
import {
  displayNewListForm,
  hideNewListForm,
  setNewListName,
  newListName,
  addNewListNametoArray,
  eventListenerListNames,
  displayList,
  displayStoredList,
} from "./addLists.js";
import {
  addIDTodoCard,
  addIDDropdownList,
  addIDDeleteBtn,
} from "./setSpecificID.js";
import { removeItemFromArray } from "./arrayManipulation.js";
import {
  storeObject,
  storeList,
  deleteAllStoredItems,
  saveItemsBeforeExit,
} from "./localStorage.js";

//global variables
const displayForm = document.querySelector("#displayForm");
let hideForm = document.querySelector("#submit");
const newList = document.querySelector("#newFolder");
const newListSubmit = document.querySelector("#submitProject");
const listInput = document.querySelector("#newProjectName");
let todoCards = document.querySelectorAll(".todoCard");
let defaultDom = document.querySelector("#defaultList");

let defaultList = [];
let listNames = [];

let selectedName = "";
let newItem = [];
//extra arrays for both objects and list names to be looped over
let storedListNames = [];
let storedObjects = [];

//this functino will save todo items on user exit

//this function fires on webpage load
window.addEventListener("load", () => {
  let storedObjects = window.localStorage.length;
  for (let objects = 0; objects < storedObjects; objects++) {
    let parsedItem = "";
    let storedList = "";
    let keyString = localStorage.key(objects);
    console.log(keyString);
    if (keyString.includes("list") != true) {
      let storedItem = localStorage.getItem(keyString);
      parsedItem = JSON.parse(storedItem);
      console.log(storedItem);
      defaultList.push(parsedItem);
    } else {
      storedList = localStorage.getItem(keyString);

      listNames.push(storedList);
    }
  }
  deleteAllStoredItems();
  displayDefaultList(defaultList);
  addDropdownList(defaultList);

  addDeleteBtn();
  //add unique add to todoItem
  addIDTodoCard();
  //add unique ID to dropdownlist
  addIDDropdownList();
  addIDDeleteBtn();
  collapseDetails();
  displayStoredList(listNames);
  let x = document.querySelectorAll(".sidebarListItem");
  addListNameOption(listNames);
  eventListenerListNames(defaultList);
  showListItems(resetRightColumn);

  saveItemsBeforeExit(defaultList);

  //removes DOM todo item on click, invoking functions as parameters keeps page dynamic on deletion of items
  removeItemFromArray(defaultList);
  removeTodoItem(
    resetRightColumn,
    deleteAllStoredItems,
    displayDefaultList,
    addDropdownList,
    addListNameOption,
    addDeleteBtn,
    addIDTodoCard,
    addIDDeleteBtn,
    addIDDropdownList,
    collapseDetails,
    saveItemsBeforeExit,
    removeItemFromArray,
    removeTodoItem
  );
});

document.body.addEventListener("click", () => {});

//event listener for opening new item form
displayForm.addEventListener("click", () => {
  //show form
  displayTodoItemForm();
});

//event listener for new todo item submission
hideForm.addEventListener("click", () => {
  newItem = [];
  //reset the webpage to avoid duplicate todo items
  resetRightColumn();
  //grab data from form
  pullToDoItemData();
  //create Todo Item Object
  createObject(defaultList, newItem);
  //grab new object
  //store object in local storage
  storeObject(defaultList);
  //reset form
  resetForm();
  //hide form
  hideTodoItemForm();
  //display default list
  displayDefaultList(defaultList);
  addDropdownList(defaultList);
  addListNameOption(listNames);
  addDeleteBtn();
  //add unique add to todoItem
  addIDTodoCard();
  //add unique ID to dropdownlist
  addIDDropdownList();
  addIDDeleteBtn();
  collapseDetails();
  eventListenerListNames(defaultList);
  //removes DOM todo item on click, invoking functions as parameters keeps page dynamic on deletion of items
  removeItemFromArray(defaultList);
  removeTodoItem(
    resetRightColumn,
    deleteAllStoredItems,
    displayDefaultList,
    addDropdownList,
    addListNameOption,
    addDeleteBtn,
    addIDTodoCard,
    addIDDeleteBtn,
    addIDDropdownList,
    collapseDetails,
    saveItemsBeforeExit,
    removeItemFromArray,
    removeTodoItem
  );
});
//this function deletes a card and resets page based on contents of array after splicing deleted object
function removeTodoItem(
  hi,
  deleteAll,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  yo,
  saveItems,
  j,
  k
) {
  let deleteBtns = document.querySelectorAll(".deleteBtn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", () => {
      document.querySelector(`#todoItem${i}`).remove();

      hi();
      deleteAll();
      b(defaultList);
      c(defaultList);
      d(listNames);
      e();
      f();
      g();
      h();
      yo();
      saveItems(defaultList);
      j(defaultList);
      k(
        resetRightColumn,
        deleteAllStoredItems,
        displayDefaultList,
        addDropdownList,
        addListNameOption,
        addDeleteBtn,
        addIDTodoCard,
        addIDDeleteBtn,
        addIDDropdownList,
        collapseDetails,
        saveItemsBeforeExit,
        removeItemFromArray,
        removeTodoItem
      );
    });
  }
}
//duplicating above function with minor change if delete button is clicked while the default list is
function removeTodoItemofUniqueList(
  hi,
  deleteAll,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  yo,
  saveItems,
  j,
  k
) {
  let deleteBtns = document.querySelectorAll(".deleteBtn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", () => {
      document.querySelector(`#todoItem${i}`).remove();

      hi();
      deleteAll();
      b(defaultList, selectedName);
      c(defaultList);
      d(listNames);
      e();
      f();
      g();
      h();
      yo();
      saveItems(defaultList);
      j(defaultList);
      k(
        resetRightColumn,
        deleteAllStoredItems,
        displayUniqueList,
        addDropdownList,
        addListNameOption,
        addDeleteBtn,
        addIDTodoCard,
        addIDDeleteBtn,
        addIDDropdownList,
        collapseDetails,
        saveItemsBeforeExit,
        removeItemFromArray,

        removeTodoItem
      );
    });
  }
}
//event listener for new-list button
newList.addEventListener("click", () => {
  //display form
  displayNewListForm();
});
//event listener for new-list submit button
newListSubmit.addEventListener("click", () => {
  hideNewListForm();
  setNewListName(listInput.value);
  displayList(listInput.value);
  //reset dropdown options to avoid duplicates
  resetDropdown();
  addNewListNametoArray(listNames);
  storeList(listNames);

  addDropdownList(defaultList);
  addIDDropdownList();
  let x = document.querySelectorAll(".sidebarListItem");
  addListNameOption(listNames);
  eventListenerListNames(defaultList);
  showListItems(resetRightColumn);
});

function showListItems() {
  let sideBarLists = document.querySelectorAll(".sidebarListItem");

  for (let i = 0; i < sideBarLists.length; i++) {
    sideBarLists[i].addEventListener("click", () => {
      let nameofList = sideBarLists[i].innerText;
      selectedName = "";
      selectedName = nameofList;
      resetRightColumn();
      displayUniqueList(defaultList, selectedName);
      addDropdownList(defaultList);
      addListNameOption(listNames);
      eventListenerListNames(defaultList);
      addDeleteBtn();
      //add unique add to todoItem
      addIDTodoCard();
      //add unique ID to dropdownlist
      addIDDropdownList();
      addIDDeleteBtn();
      collapseDetails();

      removeItemFromArray(defaultList);
      removeTodoItemofUniqueList(
        resetRightColumn,
        deleteAllStoredItems,
        displayUniqueList,

        addDropdownList,
        addListNameOption,
        addDeleteBtn,
        addIDTodoCard,
        addIDDeleteBtn,
        addIDDropdownList,
        collapseDetails,
        saveItemsBeforeExit,
        removeItemFromArray,

        removeTodoItem
      );
      let x = document.querySelectorAll(".sidebarListItem");
    });
  }
}
//function to show all tasks
defaultDom.addEventListener("click", () => {
  resetRightColumn();
  let x = document.querySelectorAll(".sidebarListItem");

  displayDefaultList(defaultList);
  addDropdownList(defaultList);
  addListNameOption(listNames);
  eventListenerListNames(defaultList);

  addDeleteBtn();
  //add unique add to todoItem
  addIDTodoCard();
  //add unique ID to dropdownlist
  addIDDropdownList();
  addIDDeleteBtn();
  collapseDetails();

  //removes DOM todo item on click, invoking functions as parameters keeps page dynamic on deletion of items
  removeItemFromArray(defaultList);
  removeTodoItem(
    resetRightColumn,
    deleteAllStoredItems,
    displayDefaultList,
    addDropdownList,
    addListNameOption,
    addDeleteBtn,
    addIDTodoCard,
    addIDDeleteBtn,
    addIDDropdownList,
    collapseDetails,
    saveItemsBeforeExit,
    removeItemFromArray,
    removeTodoItem
  );
});
