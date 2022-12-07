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

function displayList(list) {
  let sidebar = document.querySelector(".projectContainer");
  let listElement = document.createElement("div");
  listElement.setAttribute("class", "sidebarListItem");
  let p = document.createElement("p");
  p.innerText = `${list}`;
  p.setAttribute("class", "options");
  listElement.appendChild(p);
  sidebar.appendChild(listElement);
}

function eventListenerListNames(f) {
  let dropdown = document.querySelectorAll("select");
  let dropdownOptions = document.querySelectorAll("option");

  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("change", () => {
      let object = f[i];
      object.list = dropdown[i].value;
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
  displayList,
};
