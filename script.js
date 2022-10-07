
const grid = {
  gridSquareSize: 32,
  gridBackgroundColor: '#FFFFFF',
  gridLineColor: '#5A5A5A',
  gridPreviousLineColor: null,
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
    if (grid.rainbowMode) {
      const randomColor = generateRandomColor();
      console.log(randomColor)
      drawnCell.style.backgroundColor = randomColor;
      drawnCell.style.borderColor = randomColor;
    } else {
      drawnCell.style.backgroundColor = grid.penColor;
      drawnCell.style.borderColor = grid.penColor;
    }
    drawnCell.classList.add('drawn');
  }
}

function generateRandomColor() {
  const digits = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  let randomHexCode = '#';
  while (randomHexCode.length < 7) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    randomHexCode += digits[randomIndex];
  }
  return randomHexCode;
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
  updateBlankCells();
}

function updateGridLineColor(e) {
  const gridLineColorValue = e.target.value;
  grid.gridLineColor = gridLineColorValue;
  updateBlankCells();
}

function updateBlankCells() {
  const gridCells = Array.from(document.querySelectorAll('.cell'));

  gridCells.forEach(cell => {
    if (!cell.classList.contains('drawn')){
      cell.style.backgroundColor = grid.gridBackgroundColor;
      cell.style.borderColor = grid.gridLineColor
    }
  })
}


function toggleGridlessMode(e) {
  if (!grid.gridlessMode) {
    grid.gridPreviousLineColor = grid.gridLineColor;
    grid.gridLineColor = grid.gridBackgroundColor;
    updateBlankCells()
    grid.gridlessMode = true;
  } else {
    grid.gridLineColor = grid.gridPreviousLineColor;
    updateBlankCells()
    grid.gridlessMode = false;
  }
  displayGridlessModeState()
}

function displayGridlessModeState() {
  const gridlessModeState = document.querySelector('.gridless-mode-state');
  if (grid.gridlessMode) gridlessModeState.textContent = 'on';
  else gridlessModeState.textContent = '';
}

function updatePenColor(e) {
  const colorPickerValue = e.target.value;
  grid.penColor = colorPickerValue;
}


function activateRainbowMode() {
  //run rainbow mode on/off
  grid.rainbowMode = !grid.rainbowMode;
  //display rainbow mode state
  displayRainbowModeState();
}

function displayRainbowModeState() {
  const rainbowModeState = document.querySelector('.rainbow-mode-state');
  if (grid.rainbowMode) rainbowModeState.textContent = 'on'
  else rainbowModeState.textContent = '';
}


(function() {

  const gridSquareSizeSlider = document.querySelector('.slider');
  const gridBackgroundColorPicker = document.querySelector('#grid-color-range');
  const gridLineColorPicker = document.querySelector('#grid-line-color-range');
  const gridlessModeCheckbox = document.querySelector('#gridless-option');
  const penColorPicker = document.querySelector('#pen-color-range');
  const rainbowModeCheckbox = document.querySelector('#rainbow-mode');

  gridSquareSizeSlider.addEventListener('click', updateGridSquareSize);
  gridBackgroundColorPicker.addEventListener('input', updateGridBackgroundColor);
  gridLineColorPicker.addEventListener('input', updateGridLineColor);
  gridlessModeCheckbox.addEventListener('click', toggleGridlessMode);
  penColorPicker.addEventListener('input', updatePenColor);
  rainbowModeCheckbox.addEventListener('input', activateRainbowMode);

  createGrid(grid.gridSquareSize);

})();




