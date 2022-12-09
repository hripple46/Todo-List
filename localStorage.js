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

export { storeObject, storeList };
