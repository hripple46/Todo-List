function setID() {
  let todoItem = document.querySelectorAll(
    ".border.rounded-pill.d-flex.align-items-center"
  );
  let deleteBtn = document.querySelectorAll(
    ".btn.btn-outline-danger.ms-auto.mt-2.mb-2.me-3.fs-6"
  );

  for (let i = 0; i < todoItem.length; i++) {
    todoItem[i].setAttribute("id", `todo${[i]}`);
    deleteBtn[i].setAttribute("id", `deleteBtn${[i]}`);
  }
}

export { setID };
