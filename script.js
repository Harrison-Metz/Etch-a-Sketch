const container = document.querySelector('.grid-container');

function createDiv(){
    const gridBlock = document.createElement('div');
    gridBlock.classList.add('grid');
    container.appendChild(gridBlock);

}

function createRow(index){
    const gridRow = document.createElement('div');
    gridRow.classList.add('row' + index);
    container.appendChild(gridRow);
    
}

function createGrid(width, height){
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            createDiv(j);
            console.log('DIV: ' + j + ' ROW: ' + i);
        }
        const lineBreak = document.createElement('br');
        container.appendChild(lineBreak);
    }
    
}

createGrid(16, 16);