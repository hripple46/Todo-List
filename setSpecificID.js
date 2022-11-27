function setID(a) {
  let todoItem = document.querySelectorAll(
    ".border.rounded-pill.d-flex.align-items-center"
  );

  for (let i = 0; i < todoItem.length; i++) {
    todoItem[i].setAttribute("id", `todo${[i]}`);
  }

  let deleteBtn = document.querySelectorAll(
    ".btn.btn-outline-danger.ms-auto.mt-2.mb-2.me-3.fs-6"
  );
  for (let j = 0; j < deleteBtn.length; j++) {
    deleteBtn[j].setAttribute("id", `deleteBtn${[j]}`);
    deleteBtn[j].addEventListener("click", () => {
      document.querySelector(`#todo${[j]}`).remove();
      a.splice(j, 1);
    });
  }
}

export { setID };
