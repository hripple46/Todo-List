function displayTodo(a) {
  let body = document.body;
  const todoCard = document.createElement("div");
  for (let i in a) {
    let text = document.createElement("p");
    text.innerText = `${a[i]}`;
    todoCard.appendChild(text);
  }
  body.appendChild(todoCard);
}
export { displayTodo };
