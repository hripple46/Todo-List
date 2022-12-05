let newListName = "";

function displayNewListForm() {
  document.querySelector("#inputProject").style.display = "block";
}

function hideNewListForm() {
  document.querySelector("#inputProject").style.display = "none";
}

function setNewListName(x) {
  newListName = "";
  newListName = `${x}`;
}
function addNewListNametoArray(y) {
  y.push(newListName);
}

export {
  displayNewListForm,
  hideNewListForm,
  setNewListName,
  newListName,
  addNewListNametoArray,
};
