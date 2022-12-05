function addIDTodoCard() {
  let todoList = document.querySelectorAll(".todoCard");

  for (let i = 0; i < todoList.length; i++) {
    todoList[i].setAttribute("id", `todoItem${i}`);
  }
}
function addIDDropdownList() {
  let dropdownLists = document.querySelectorAll("select");

  for (let i = 0; i < dropdownLists.length; i++) {
    dropdownLists[i].setAttribute("id", `dropDownList${i}`);
  }
}

export { addIDTodoCard, addIDDropdownList };
