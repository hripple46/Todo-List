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

function eventListenerListNames(f) {
  let dropdown = document.querySelectorAll("select");
  let dropdownOptions = document.querySelectorAll("option");

  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("change", () => {
      let object = f[i];
      object.list = dropdown[i].value;
      console.log(f);
    });
  }
}

//function assignListNames

export {
  displayNewListForm,
  hideNewListForm,
  setNewListName,
  newListName,
  addNewListNametoArray,
  eventListenerListNames,
};
