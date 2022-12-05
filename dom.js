function displayDefaultList(x) {
  //loop through default list
  for (let i = 0; i < x.length; i++) {
    let newItem = document.createElement("div");
    newItem.setAttribute("class", "todoCard");
    //loop through each object within the list
    for (let key in x[i]) {
      //add obbject properties to todo item
      //skip todo list property
      if ([key] == "list") {
        continue;
      }
      let todoItemContent = document.createElement("p");
      todoItemContent.innerText = `${x[i][key]}`;
      newItem.appendChild(todoItemContent);
    }

    //add todo item to body
    document.querySelector("#rightColumn").appendChild(newItem);
  }
}
function addDropdownList(a) {
  let newItem = document.querySelectorAll(".todoCard");

  for (let i = 0; i < a.length; i++) {
    //adds dropdown list of current lists
    let dropdownList = document.createElement("select");
    dropdownList.setAttribute("class", "dropdownList");
    dropdownList.setAttribute("name", "dropdownList");
    let option = document.createElement("option");
    option.setAttribute("value", "Default");
    option.innerText = "Default";
    dropdownList.appendChild(option);
    let dropdownLabel = document.createElement("label");
    dropdownLabel.setAttribute("for", "dropdownList");
    dropdownLabel.setAttribute("class", "dropdownLabel");
    dropdownLabel.innerText = "List: ";
    newItem[i].appendChild(dropdownLabel);
    newItem[i].appendChild(dropdownList);
  }
}

function addListNameOption(y) {
  let lists = document.querySelectorAll(".dropdownList");
  for (let i = 0; i < lists.length; i++) {
    for (let j = 0; j < y.length; j++) {
      let newListOption = document.createElement("option");
      newListOption.setAttribute("value", y[j]);
      newListOption.innerText = `${y[j]}`;
      lists[i].appendChild(newListOption);
    }
  }
}

function resetDropdown() {
  let lists = document.querySelectorAll(".dropdownList");
  let listLabels = document.querySelectorAll(".dropdownLabel");

  for (let i = 0; i < lists.length; i++) {
    lists[i].remove();
    listLabels[i].remove();
  }
}

function resetRightColumn() {
  let todoItems = document.querySelectorAll(".todoCard");
  for (let i = 0; i < todoItems.length; i++) {
    todoItems[i].remove();
  }
}
export {
  displayDefaultList,
  resetRightColumn,
  addListNameOption,
  resetDropdown,
  addDropdownList,
};
