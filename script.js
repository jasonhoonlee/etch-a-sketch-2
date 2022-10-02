
const grid = {
  gridSquareSize: 32,
  gridBackgroundColor: '#FFFFFF',
  gridLineColor: '#5A5A5A',
  gridlessMode: false,
  penColor: '#000000',
  rainbowMode: false,
  eraserMode: false
}






// CREATE GRID
function createGrid(gridSize) {
  const gridContainer = document.querySelector('.container');
  for (let i = 0; i < gridSize; i++) {
    const gridRowHTML = createRow(gridSize);
    gridContainer.append(gridRowHTML);
  }
}

function createRow(gridSize) {
  //create cells for each row
  const row = document.createElement('div');
  row.classList.add('row');
  for (let i = 0; i < gridSize; i++) {
    const cell = createRowCells(gridSize);
    row.append(cell);
  }
  return row;
}

function createRowCells(gridSize) {
  let cell = document.createElement('div');
  defineCellBorderColor(cell);
  defineCellBackgroundColor(cell);
  addClassNameToCell(cell);
  makeCellDrawable(cell);
  return cell;
}

function defineCellBorderColor(cell) {
  const gridContainer = document.querySelector('.container');
  const borderDetails = `.5px solid ${grid.gridLineColor}`;
  gridContainer.style.borderTop = borderDetails;
  gridContainer.style.borderLeft = borderDetails;
  cell.style.borderBottom = borderDetails;
  cell.style.borderRight = borderDetails;
}

function defineCellBackgroundColor(cell) {
  cell.style.backgroundColor = grid.gridBackgroundColor;
}

function addClassNameToCell(cell) {
  cell.classList.add('cell');
}


function makeCellDrawable(cell) {
  cell.addEventListener('mouseover', colorCell);
}

function colorCell(e) {
  if (e.buttons === 1) {
    const drawnCell = e.target;
    drawnCell.style.backgroundColor = grid.penColor;
    drawnCell.style.border = grid.penColor;
  }
}


createGrid(32)