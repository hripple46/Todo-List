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
  let existingItems = document.querySelectorAll(
    ".border.rounded-pill.d-flex.align-items-center"
  );
  for (let i = 0; i < existingItems.length; i++) {
    existingItems[i].remove();
  }
}

function displayTodo(a) {
  let rightColumn = document.querySelector("#rightColumn");
  const todoCard = document.createElement("div");
  todoCard.setAttribute(
    "class",
    "border rounded-pill d-flex align-items-center mt-4"
  );
  for (let i in a) {
    let text = document.createElement("div");
    text.setAttribute("class", "ms-2");
    text.innerText = `${a[i]}`;
    todoCard.appendChild(text);
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute(
      "class",
      "btn btn-outline-danger ms-auto mt-2 mb-2 me-3 fs-6"
    );
    deleteBtn.innerText = "X";
    todoCard.appendChild(deleteBtn);
    break;
  }
  rightColumn.appendChild(todoCard);
}

export { displayTodo, resetDisplay };
