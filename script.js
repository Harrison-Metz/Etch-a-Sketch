let strokeCount = 1;
let strokesCalc = 1 / strokeCount;

const restartBtn = document.getElementById('restartBtn');
const strokeInput = document.getElementById('strokes');
const sizeInput = document.getElementById('size');
const submitBtn = document.getElementById('submit');

const container = document.querySelector('.grid-container');

function createRow(columns){
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    for(let i = 0; i < columns; i++){
        const box = document.createElement('div');
        box.className = 'box';
        box.addEventListener('mouseover', function(){
            let opacity = parseFloat(getComputedStyle(box).opacity)
            let newOpacity = Math.max(0, opacity - strokesCalc);
            box.style.opacity = newOpacity;
        });
        row.appendChild(box);
    }
}

function createGrid(rows, columns){
    for(let i = 0; i < rows; i++){
        createRow(columns);
    }
}

function removeGrid(parent){
    while (parent.lastChild){
        parent.removeChild(parent.lastChild);
    }
}

function rebuild(){
    removeGrid(container);
    strokeCount = strokeInput.value;
    strokesCalc = 1 / strokeCount;
    gridSize = sizeInput.value;
    createGrid(gridSize, gridSize);
}

submitBtn.addEventListener('click', rebuild);

restartBtn.addEventListener('click', rebuild);

createGrid(32, 32);