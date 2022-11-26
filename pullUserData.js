let todoInput = [];

function pullData() {
  let inputs = document.querySelectorAll("input");
  todoInput = [];
  for (let i = 0; i < inputs.length; i++) {
    todoInput.push(`${inputs[i].value}`);
  }
}
export { pullData, todoInput };
