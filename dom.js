function displayDefaultList(x) {
  //loop through default list
  for (let i = 0; i < x.length; i++) {
    let newItem = document.createElement("div");
    newItem.setAttribute("class", "todoCard");
    let collapseDiv = document.createElement("div");
    collapseDiv.setAttribute("class", "collapseDiv");
    collapseDiv.style.display = "none";
    //loop through each object within the list
    for (let key in x[i]) {
      //add obbject properties to todo item
      //skip todo list property
      if ([key] == "list") {
        continue;
      }
      if ([key] == "title") {
        let todoItemContent = document.createElement("p");
        todoItemContent.innerText = `${x[i][key]}`;
        newItem.appendChild(todoItemContent);
      } else {
        let todoItemContent = document.createElement("p");
        todoItemContent.innerText = `${x[i][key]}`;
        collapseDiv.appendChild(todoItemContent);
      }
    }

    //add todo item to body
    document.querySelector("#rightColumn").appendChild(newItem);
    newItem.appendChild(collapseDiv);
  }
}
function displayUniqueList(x, y) {
  //loop through default list
  for (let i = 0; i < x.length; i++) {
    let newItems = document.createElement("div");
    newItems.setAttribute("class", "todoCard");
    let collapseDiv = document.createElement("div");
    collapseDiv.setAttribute("class", "collapseDiv");
    collapseDiv.style.display = "none";
    //loop through each object within the list
    for (let key in x[i]) {
      //add obbject properties to todo item
      //skip todo list property
      if ([key] == "list") {
        continue;
      }
      if ([key] == "title") {
        let todoItemContent = document.createElement("p");
        todoItemContent.innerText = `${x[i][key]}`;
        newItems.appendChild(todoItemContent);
      } else {
        let todoItemContent = document.createElement("p");
        todoItemContent.innerText = `${x[i][key]}`;
        collapseDiv.appendChild(todoItemContent);
      }
    }

    //add todo item to body
    document.querySelector("#rightColumn").appendChild(newItems);
    newItems.appendChild(collapseDiv);
    if (x[i].list != y) {
      newItems.style.display = "none";
    }
  }
}
function addDeleteBtn() {
  let todoItem = document.querySelectorAll(".todoCard");
  for (let i = 0; i < todoItem.length; i++) {
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn");
    todoItem[i].appendChild(deleteBtn);
  }
}

function addDropdownList() {
  let newItem = document.querySelectorAll(".todoCard");

  for (let i = 0; i < newItem.length; i++) {
    //adds dropdown list of current lists
    let dropdownList = document.createElement("select");
    dropdownList.setAttribute("class", "dropdownList");
    dropdownList.setAttribute("name", "dropdownList");
    let option = document.createElement("option");
    let selectedOption = document.createElement("option");

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
  let hiddenDetails = document.querySelectorAll(".collapseDiv");
  if (todoItems.length === 0) {
    return;
  } else {
    for (let i = 0; i < todoItems.length; i++) {
      todoItems[i].remove();
      hiddenDetails[i].remove();
    }
  }
}
function collapseDetails() {
  let grabCards = document.querySelectorAll(".todoCard");
  let displayHiddenDiv = document.querySelectorAll(".collapseDiv");

  for (let i = 0; i < grabCards.length; i++) {
    grabCards[i].addEventListener("click", () => {
      if (displayHiddenDiv[i].style.display === "none") {
        displayHiddenDiv[i].style.display = "block";
      } else {
        displayHiddenDiv[i].style.display = "none";
      }

      let expandContent = document.querySelectorAll(`.collapse${i}`);
      for (let detail = 0; detail < expandContent.length; detail++) {
        expandContent[detail].style.gridRowStart = "2";
        expandContent[detail].style.gridRowEnd = "3";
        if (expandContent[detail].style.display === "none") {
          expandContent[detail].style.display = "block";
        } else {
          expandContent[detail].style.display = "none";
        }
      }
    });
  }
}

export {
  displayDefaultList,
  resetRightColumn,
  addListNameOption,
  resetDropdown,
  addDropdownList,
  addDeleteBtn,
  displayUniqueList,
  collapseDetails,
};
