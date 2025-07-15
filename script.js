const container = document.querySelector('.grid-container');

function createRow(columns){
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    for(let i = 0; i < columns; i++){
        const box = document.createElement('div');
        box.className = 'box';
        row.appendChild(box);
    }
}

function createGrid(rows, columns){
    for(let i = 0; i < rows; i++){
        createRow(columns);
    }
}

createGrid(16, 16);