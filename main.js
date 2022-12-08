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
} from "./addLists.js";
import {
  addIDTodoCard,
  addIDDropdownList,
  addIDDeleteBtn,
} from "./setSpecificID.js";
import { removeItemFromArray } from "./arrayManipulation.js";

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
document.body.addEventListener("click", () => {
  console.log(defaultList);
});

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
    displayDefaultList,
    addDropdownList,
    addListNameOption,
    addDeleteBtn,
    addIDTodoCard,
    addIDDeleteBtn,
    addIDDropdownList,
    collapseDetails,
    removeItemFromArray,
    removeTodoItem
  );
});
//this function deletes a card and resets page based on contents of array after splicing deleted object
function removeTodoItem(hi, b, c, d, e, f, g, h, yo, j, k) {
  let deleteBtns = document.querySelectorAll(".deleteBtn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", () => {
      document.querySelector(`#todoItem${i}`).remove();
      hi();
      b(defaultList);
      c(defaultList);
      d(listNames);
      e();
      f();
      g();
      h();
      yo();
      j(defaultList);
      k(
        resetRightColumn,
        displayDefaultList,
        addDropdownList,
        addListNameOption,
        addDeleteBtn,
        addIDTodoCard,
        addIDDeleteBtn,
        addIDDropdownList,
        collapseDetails,
        removeItemFromArray,
        removeTodoItem
      );
      console.log(defaultList);
    });
  }
}
//duplicating above function with minor change if delete button is clicked while the default list is
function removeTodoItemofUniqueList(hi, b, c, d, e, f, g, h, yo, j, k) {
  let deleteBtns = document.querySelectorAll(".deleteBtn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", () => {
      document.querySelector(`#todoItem${i}`).remove();
      hi();
      b(defaultList, selectedName);
      c(defaultList);
      d(listNames);
      e();
      f();
      g();
      h();
      yo();
      j(defaultList);
      k(
        resetRightColumn,
        displayUniqueList,
        addDropdownList,
        addListNameOption,
        addDeleteBtn,
        addIDTodoCard,
        addIDDeleteBtn,
        addIDDropdownList,
        collapseDetails,
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
  addDropdownList(defaultList);
  addIDDropdownList();
  let x = document.querySelectorAll(".sidebarListItem");
  removeEventListener(x);
  addListNameOption(listNames);
  eventListenerListNames(defaultList);
  showListItems(resetRightColumn);
});
function removeEventListener(a) {
  for (let i = 0; i < a.length; i++) {
    a[i].removeEventListener("click", () => {
      let nameofList = sideBarLists[i].innerText;
      nameofList;
      selectedName = "";
      selectedName = nameofList;
      selectedName;
      resetRightColumn();
      displayUniqueList(defaultList, selectedName);
      eventListenerListNames(defaultList);
      removeTodoItem(
        resetRightColumn,
        displayDefaultList,
        addDropdownList,
        addListNameOption,
        addDeleteBtn,
        addIDTodoCard,
        addIDDeleteBtn,
        addIDDropdownList,
        eventListenerListNames
      );
    });
  }
}

function showListItems() {
  let sideBarLists = document.querySelectorAll(".sidebarListItem");

  for (let i = 0; i < sideBarLists.length; i++) {
    sideBarLists[i].addEventListener("click", () => {
      let nameofList = sideBarLists[i].innerText;
      removeEventListener(sideBarLists);
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
      removeItemFromArray(defaultList);
      removeTodoItemofUniqueList(
        resetRightColumn,
        displayUniqueList,
        addDropdownList,
        addListNameOption,
        addDeleteBtn,
        addIDTodoCard,
        addIDDeleteBtn,
        addIDDropdownList,
        collapseDetails,
        removeItemFromArray,

        removeTodoItemofUniqueList
      );
      let x = document.querySelectorAll(".sidebarListItem");

      removeEventListener(x);
      console.log(defaultList);
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
  //removes DOM todo item on click, invoking functions as parameters keeps page dynamic on deletion of items
  removeItemFromArray(defaultList);
  removeTodoItem(
    resetRightColumn,
    displayDefaultList,
    addDropdownList,
    addListNameOption,
    addDeleteBtn,
    addIDTodoCard,
    addIDDeleteBtn,
    addIDDropdownList,
    collapseDetails,
    removeItemFromArray,
    removeTodoItem
  );
  console.log(defaultList);
});
