
const grid = {
  gridSquareSize: 32,
  gridBackgroundColor: '#FFFFFF',
  gridLineColor: '#5A5A5A',
  gridlessMode: false,
  penColor: '#000000',
  rainbowMode: false,
  eraserMode: false
}







function createGrid(gridSquareSize) {
  const gridContainer = document.querySelector('.container');
  gridContainer.innerHTML = '';
  for (let i = 0; i < gridSquareSize; i++) {
    const gridRowHTML = createRow(gridSquareSize);
    gridContainer.append(gridRowHTML);
  }
}

function createRow(gridSize) {
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
  cell.addEventListener('mousedown', colorCell);
  cell.addEventListener('mouseover', colorCell);
}

function colorCell(e) {
  if (e.buttons === 1) {
    const drawnCell = e.target;
    drawnCell.style.backgroundColor = grid.penColor;
    drawnCell.style.borderColor = grid.penColor;
  }
}

function updateGridSquareSize(e) {
  const sliderValue = e.target.value;
  createGrid(sliderValue);
  updateGridSquareSizeUI(sliderValue)
}

function updateGridSquareSizeUI(sliderValue) {
  const gridSquareSizeTool = document.querySelector('.grid-size-number');
  gridSquareSizeTool.textContent = `${sliderValue} ${'x'} ${sliderValue}`;
}

function updateGridBackgroundColor(e) {
  const backgroundColorValue = e.target.value;
  grid.gridBackgroundColor = backgroundColorValue;
  createGrid(grid.gridSquareSize);
}

function updateGridLineColor(e) {
  const gridLineColorValue = e.target.value;
  grid.gridLineColor = gridLineColorValue;
  createGrid(grid.gridSquareSize);
}


(function() {

  const gridSquareSizeSlider = document.querySelector('.slider');
  const gridBackgroundColorPicker = document.querySelector('#grid-color-range');
  const gridLineColorPicker = document.querySelector('#grid-line-color-range');


  gridSquareSizeSlider.addEventListener('click', updateGridSquareSize);
  gridBackgroundColorPicker.addEventListener('input', updateGridBackgroundColor);
  gridLineColorPicker.addEventListener('input', updateGridLineColor);

  createGrid(grid.gridSquareSize)

})();




