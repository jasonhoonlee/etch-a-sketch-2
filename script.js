
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
    //create row html
    const gridRowHTML = createRow(gridSize);
    //add complete grid row to html
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
  cell = defineCellBorderColor(cell);
  cell = defineCellBackgroundColor(cell);
  cell = addClassNameToCell(cell);
  return cell
}

function defineCellBorderColor(cell) {
  const gridContainer = document.querySelector('.container');
  const borderDetails = `.5px solid ${grid.gridLineColor}`;
  gridContainer.style.borderTop = borderDetails;
  gridContainer.style.borderLeft = borderDetails;
  cell.style.borderBottom = borderDetails;
  cell.style.borderRight = borderDetails;
  return cell;
}

function defineCellBackgroundColor(cell) {
  cell.style.backgroundColor = grid.gridBackgroundColor;
  return cell;
}

function addClassNameToCell(cell) {
  cell.classList.add('cell');
  return cell;
}


createGrid(32)