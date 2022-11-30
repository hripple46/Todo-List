const projectBtn = document.querySelector("#newFolder");
const submitProject = document.querySelector("#submitProject");
const newProjectName = document.querySelector("#newProjectName");

function createArray(a) {
  projectBtn.addEventListener("click", () => {
    document.querySelector("#inputProject").style.display = "flex";
  });
  submitProject.addEventListener("click", () => {
    document.querySelector("#inputProject").style.display = "none";
  });
}
export { createArray, projectBtn };
