function addIDTodoCard() {
  let todoList = document.querySelectorAll(".todoCard");
  let hiddenDetails = document.querySelectorAll(".collapseDiv");
  for (let i = 0; i < todoList.length; i++) {
    todoList[i].setAttribute("id", `todoItem${i}`);
    hiddenDetails[i].setAttribute("id", `collapseDiv${i}`);
  }
}
function addIDDropdownList() {
  let dropdownLists = document.querySelectorAll("select");

  for (let i = 0; i < dropdownLists.length; i++) {
    dropdownLists[i].setAttribute("id", `dropDownList${i}`);
  }
}
function addIDDeleteBtn() {
  let deleteBtns = document.querySelectorAll(".deleteBtn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].setAttribute("id", `deleteBtn${i}`);
  }
}

export { addIDTodoCard, addIDDropdownList, addIDDeleteBtn };
