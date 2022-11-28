function setID() {
  let todoItem = document.querySelectorAll(".todoCard");
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  let content = document.querySelectorAll(".collapse");

  for (let i = 0; i < todoItem.length; i++) {
    todoItem[i].setAttribute("id", `todo${[i]}`);
    deleteBtn[i].setAttribute("id", `deleteBtn${[i]}`);
    content[i].setAttribute("id", `content${[i]}`);
  }
}

export { setID };
