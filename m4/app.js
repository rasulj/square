
let board = document.querySelector('#board');


const SQUARS_NUMBER = 1500;
const colors =[
    'Orange',
    'DodgerBlue',
    'MediumSeaGreen',
    'Gray',
    'SlateBlue',
    'Violet',
   'LightGray'
]






for(let i = 0 ; i < SQUARS_NUMBER ; i++){
    const square = document.createElement('div')
    square.classList.add('square');

    square.addEventListener('mouseover',()=>
        setColor(square)  );
  

       square.addEventListener('mouseleave',()=>
       removeColor(square) )
   
    board.append(square)
}


function setColor(element){
    let color = getRendomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`
   
}
function removeColor(element){
    element.style.backgroundColor ='#1d1d1d'
       element.style.boxShadow = `0 0 2px #000 `
}
function getRendomColor(){
    const index = Math.floor( Math.random() * colors.length
    )
    return colors[index]
}
getRendomColor()