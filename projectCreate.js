const projectBtn = document.querySelector("#newFolder");
const submitProject = document.querySelector("#submitProject");
const newProjectName = document.querySelector("#newProjectName");
const projectContainer = document.querySelector(".projectContainer");
const inputProejct = document.querySelector("#inputProject");
let projectNames = [];

function getProjectName(a) {
  document.querySelector("#inputProject").style.display = "none";
  projectNames.push(newProjectName.value);
  inputProejct.reset();
  let newName = document.querySelectorAll(".projectNames");
  for (let j = 0; j < newName.length; j++) {
    newName[j].remove();
    a.splice(j, 1);
  }
  for (let x = 0; x < projectNames.length; x++) {
    let projectElement = document.createElement("div");
    projectElement.setAttribute("class", "projectNames");
    let p = document.createElement("p");
    p.innerText = projectNames[x];
    projectElement.appendChild(p);
    projectContainer.appendChild(projectElement);
    a[x] = new Array();
  }
  console.log(projectNames);
  console.log(a);
}

export { getProjectName, projectBtn };
