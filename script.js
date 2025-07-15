let colors = [
    {
        numberOfTouches : 0,
        color : 'rgb(255, 255, 255)'
    },
    {
        numberOfTouches : 1,
        color : 'rgb(227, 227, 227)'
    },
    {
        numberOfTouches : 2, 
        color : 'rgb(198, 198, 198)'
    },
    {
        numberOfTouches : 3, 
        color : 'rgb(170, 170, 170)'
    },
    {
        numberOfTouches : 4,
        color : 'rgb(142, 142, 142)'
    },
    {
        numberOfTouches : 5,
        color : 'rgb(113, 113, 113)'
    },
    {
        numberOfTouches : 6,
        color : 'rgb(85, 85, 85)'
    },
    {
        numberOfTouches : 7,
        color : 'rgb(57, 57, 57)'
    },
    {
        numberOfTouches : 8,
        color : 'rgb(28, 28, 28)'
    },
    {
        numberOfTouches : 9,
        color : 'rgb(0, 0, 0)'
    },
];
const container = document.querySelector('.grid-container');

function createRow(columns){
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    for(let i = 0; i < columns; i++){
        const box = document.createElement('div');
        box.className = 'box';
        box.addEventListener('mouseover', function(){
            box.style.backgroundColor = 'black';
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