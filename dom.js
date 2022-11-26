function displayTodo(a) {
  let rightColumn = document.querySelector("#rightColumn");
  const todoCard = document.createElement("div");
  for (let i in a) {
    let text = document.createElement("p");
    text.innerText = `${a[i]}`;
    todoCard.appendChild(text);
  }
  rightColumn.appendChild(todoCard);
}
export { displayTodo };
