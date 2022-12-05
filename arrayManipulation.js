function removeItemFromArray(x) {
  let deleteBtns = document.querySelectorAll(".deleteBtn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", () => {
      x.splice(i, 1);
      console.log(x);
    });
  }
}
export { removeItemFromArray };
