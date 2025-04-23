const display=document.getElementById("display");


const handleClick=(value)=>{
    display.value=display.value+value
    
}

const handleClear=()=>{
    display.value=""
}

const handleEqual=()=>{
   const total=eval(display.value)
   display.value=total;
}

const handleSquare=()=>{
    display.value=display.value*display.value
}
const handleQube=()=>{
    display.value=display.value*display.value*display.value
}