//object constructor for todo items
let completeList = [];
let projectList = [];

import { todoItem } from "./todoObject.js";
import { displayTodo, resetDisplay } from "./dom.js";
import { pullData, todoInput } from "./pullUserData.js";
import { setID } from "./setSpecificID.js";
import { getProjectName, projectBtn } from "./projectCreate.js";
//event listener for new folder
const newForm = document.querySelector("#newForm");

//creates new project
projectBtn.addEventListener("click", () => {
  document.querySelector("#inputProject").style.display = "flex";
});
submitProject.addEventListener("click", () => {
  getProjectName(projectList);
});

//event listener for user submission
const submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  resetDisplay();
  pullData();
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
  setID();
  deleteTodo();
  console.log(completeList);
  document.querySelector("#form").reset();
  document.querySelector("#form").style.display = "none";
  collapseDetails();
});

//this function adds delete functionality
function deleteTodo() {
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  for (let j = 0; j < deleteBtn.length; j++) {
    deleteBtn[j].addEventListener("click", () => {
      document.querySelector(`#todo${[j]}`).remove();
      document.querySelector(`#content${[j]}`).remove();
      deleteBtn[j].remove();
      completeList.splice(j, 1);
      resetDisplay();
      for (let i = 0; i < completeList.length; i++) {
        displayTodo(completeList[i]);
      }
      setID();
      collapseDetails();
      deleteTodo();
    });
  }
}
//show/hide details
function collapseDetails() {
  let collapse = document.querySelectorAll(".todoCard");

  for (let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", () => {
      let content = document.querySelector(`#content${[i]}`);
      console.log("click");
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  }
}

const popupForm = document.querySelector("#popupForm");
popupForm.addEventListener("click", () => {
  document.querySelector("#form").style.cssText = "display:block";
});
