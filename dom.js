/*function displayTodo(a) {
  let rightColumn = document.querySelector("#rightColumn");
  const todoCard = document.createElement("div");
  for (let i in a) {
    let text = document.createElement("p");
    text.innerText = `${a[i]}`;
    todoCard.appendChild(text);
  }
  rightColumn.appendChild(todoCard);
}*/

function resetDisplay() {
  let existingItems = document.querySelectorAll(".todoCard");
  let existingDeleteBtns = document.querySelectorAll(".deleteBtn");
  let existingCollapse = document.querySelectorAll(".collapse");

  for (let i = 0; i < existingItems.length; i++) {
    existingItems[i].remove();
    existingCollapse[i].remove();
    existingDeleteBtns[i].remove();
  }
}

function displayTodo(a) {
  let rightColumn = document.querySelector("#rightColumn");
  const todoCard = document.createElement("div");
  todoCard.setAttribute("class", "todoCard");
  for (let i in a) {
    let text = document.createElement("div");
    text.setAttribute("class", "task");
    text.innerText = `${a[i]}`;
    todoCard.appendChild(text);
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteBtn.innerText = "X";
    todoCard.appendChild(deleteBtn);

    break;
  }
  //add Todo to display

  rightColumn.appendChild(todoCard);

  //add collapsible to html
  let content = document.createElement("div");
  content.setAttribute("class", "collapse");
  content.innerHTML = "<p>Hello There</p>";
  content.style.display = "none";
  rightColumn.appendChild(content);
}

export { displayTodo, resetDisplay };
