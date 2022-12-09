function storeObject(todoObject) {
  let newObject = todoObject[todoObject.length - 1];
  let indexOf = todoObject.indexOf(newObject);
  window.localStorage.setItem(`${indexOf}`, JSON.stringify(newObject));
}
function storeList(listName) {
  let newList = listName[listName.length - 1];
  let indexOfList = listName.indexOf(newList);
  window.localStorage.setItem(`list${indexOfList}`, newList);
}

function deleteAllStoredItems() {
  let keysForDeletion = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    console.log(i);
    let keyValue = localStorage.key(i);
    console.log(keyValue);
    if (keyValue.includes("list") != true) {
      keysForDeletion += keyValue;
    } else {
      continue;
    }
  }
  for (let j = 0; j < keysForDeletion.length; j++) {
    localStorage.removeItem(`${keysForDeletion[j]}`);
  }
}
function saveItemsBeforeExit(updatedList) {
  for (let i = 0; i < updatedList.length; i++) {
    let savedObject = JSON.stringify(updatedList[i]);
    localStorage.setItem(`${i}`, savedObject);
  }
}

export { storeObject, storeList, deleteAllStoredItems, saveItemsBeforeExit };
