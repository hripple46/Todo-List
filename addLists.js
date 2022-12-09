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
function displayStoredList(listArray) {
  for (let list = 0; list < listArray.length; list++) {
    let sidebar = document.querySelector(".projectContainer");
    let listElement = document.createElement("div");
    listElement.setAttribute("class", "sidebarListItem");
    let p = document.createElement("p");
    p.innerText = `${listArray[list]}`;
    p.setAttribute("class", "options");
    listElement.appendChild(p);
    sidebar.appendChild(listElement);
  }
}

function eventListenerListNames(f) {
  let dropdown = document.querySelectorAll("select");
  let dropdownOptions = document.querySelectorAll("option");

  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("change", () => {
      let object = f[i];
      object.list = dropdown[i].value;
      updateStoredObject(i, dropdown);
    });
  }
}
function updateStoredObject(index, dropdown) {
  let storedObject = localStorage.getItem(`${index}`);
  storedObject = JSON.parse(storedObject);
  storedObject.list = dropdown[index].value;
  localStorage.setItem(`${index}`, JSON.stringify(storedObject));
  console.log(storedObject);
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
  displayStoredList,
};
