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
    let icon = document.createElement("span");
    icon.setAttribute("class", "material-symbols-outlined");
    icon.innerText = "Close";
    deleteBtn.appendChild(icon);

    todoCard.appendChild(deleteBtn);

    break;
  }
  //add Todo to display

  rightColumn.appendChild(todoCard);

  //add collapsible to html
  let content = document.createElement("div");

  for (let j in a) {
    if (j == "title") {
      continue;
    } else {
      content.setAttribute("class", "collapse");
      let p = document.createElement("p");
      p.innerText = `${j}: ${a[j]}`;
      content.appendChild(p);
    }
  }
  content.style.display = "none";
  rightColumn.appendChild(content);
}

export { displayTodo, resetDisplay };
