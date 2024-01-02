const buttonArr=document.querySelectorAll('ul li');
//adding event listener to all buttons
buttonArr.forEach((node)=>{
  node.addEventListener('mousedown', function(e){
    e.preventDefault();
    const buttonValue=this.innerText;
    const display=document.querySelector('.resultarea');

    //adding the c and ce functionality
    if (buttonValue.toLowerCase()=='ce' || display.innerText=='Infinity' || display.innerText=='undefined'){
      display.innerText='';
      return true;
    } else if (buttonValue.toLowerCase()=='c' || buttonValue.toLowerCase()=='backspace'){
      display.innerText=display.innerText.slice(0,-1);
      return true;
    }
    if (buttonValue.toLowerCase()=='='){
      let result=eval(display.innerText.trim());
      display.innerText=result;
      return true;
    }
    display.innerText+=buttonValue;
  })
})