async function fetchProject(elementClass) {
  let toreturn;
  await fetch(jsonPath)
    .then(e => e.json())
    .then(data => {
      // localStorage.setItem('jsonData', data[Object.keys(data)[0]].dataset_val);
      // let jsonData = localStorage.getItem('jsonData');
      // console.log(jsonData);
      for (let i = 0; i < Object.keys(data).length; i++) {
        if (data[Object.keys(data)[i]].dataset_val == elementClass) {
          console.log(data[Object.keys(data)[i]]);
          toreturn = data[Object.keys(data)[i]];
          return;
        }
      }
    });

  return toreturn;
}

document.querySelectorAll(".main_projects-show img").forEach(presImage => {
  presImage.addEventListener("click", updateProjectView);
});

function updateProjectView() {
  let currentPick = null;
  currentPick = fetchProject(event.target.classList[0]);
  console.log(currentPick);
}
