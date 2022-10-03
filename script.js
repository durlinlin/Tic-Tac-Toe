let gridBox = document.querySelector(".gameBox");
let cellNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createGrids(arr) {
  arr.forEach((cellNum) => {
    let gridhtmlTemplate = `<div class="gridCell" data-value="${[cellNum]}"></div>`
    gridBox.insertAdjacentHTML("beforeend", gridhtmlTemplate);
  })
  
}
createGrids(cellNumber);

// function togglePlayers() {
  //   // console.log('clicked')
  //   cells.classList('red');
  // }
let cells = document.querySelectorAll('.gridCell');
console.log(cells);
cells.forEach((data) => {
  data.addEventListener('click', () => {
    console.log(`clicked ${data.dataset.value}`)
  });
})

function togglePlayer2() {
  cells.classlist.toggle('blue');
}
