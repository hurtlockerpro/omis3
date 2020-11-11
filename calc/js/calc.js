

let input = document.getElementById('txtNumbers');

function addNumber(symbol){

    //parseInt(input.value)
    //parseInt(symbol)
    console.log(symbol);
    input.value += symbol; 
    // return 'Vladimir';
    input.classList.remove('result'); 
}

function getResult(){
    input.value = eval(input.value);
    addClass('result');
}

function emptyInput(){
    input.value = '';
    removeClass('result');
}

function addClass(className){
    input.classList.add(className); 
}

function removeClass(className){
    input.classList.remove(className); 
}

//let name = addNumber('');
//console.log('Hello ' + name);
//console.log('Hello ' + addNumber(''));

// BUTTON CLICK 
let buttons = document.getElementsByTagName('button');
for (let index = 0; index < buttons.length - 1; index++) {
    //console.log(buttons[index].innerHTML);
    buttons[index].addEventListener('click', (event) => {
        //console.log(event.path[0].innerText);
        let btn = event.path[0].innerText;
        if (btn == '=') {
            getResult();
        } else if (btn == 'CE'){
            emptyInput();
        } else {
            addNumber(btn);
        }
    });
}

// INPUT KEYDOWN
let additionalButtons = [106, 109, 107, 111, 13, 8];
input.addEventListener('keydown', (event) => {

    removeClass('result'); 

    //console.log(event.key  + ' > ' + event.keyCode);
    console.log(event.key  + ' > ' + event.keyCode + ' ' + additionalButtons.includes(event.keyCode));
    // event.keyCode
    // 96 - 105
    // 48 - 57
    if ((event.keyCode < 48 || (event.keyCode > 57 && event.keyCode < 96) || event.keyCode > 105) 
    && !additionalButtons.includes(event.keyCode))
    {
        event.preventDefault();
    } else if (event.keyCode == 13) {
        getResult();
    } else {
        let lastSymbol = input.value.toString().substring(input.value.length - 1, input.value.length);
        console.log('lastSymbol ', lastSymbol, ' key ', event.key);
        
        if (event.key == lastSymbol && isNaN(lastSymbol) == true && additionalButtons.includes(event.keyCode)){
            event.preventDefault();
        } 
        else if (event.key != lastSymbol && isNaN(lastSymbol) == true && additionalButtons.includes(event.keyCode))
        {
            input.value = input.value.toString().substring(0, input.value.length - 1);
        }
        
    }
});
