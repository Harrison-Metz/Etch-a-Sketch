let strokeInput = 1;
let strokes = 1 / strokeInput;
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
            let newOpacity = Math.max(0, opacity - strokes);
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

createGrid(32, 32);