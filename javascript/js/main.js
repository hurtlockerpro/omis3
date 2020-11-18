/*
    alert('Hello !');
    alert('Hello !');
    alert('Hello !');
*/


// console.log('Hello Vladimir');
// variable 
var name = "Vladimir";

let firstname = 'Vladimir'; 

let lastname = `result: ${1+ + 2 + 2 + 1}`; // template

const x = 10;

//x = 11;

console.log('result: ' + (1+1 + (5+8) )); // concatenation
console.log((1+1) + 'result: '); // concatenation
console.log( 'result: ' + (1+1) + ' end'); // concatenation

console.log(lastname);    

let mynumber = 10;
let istrue = true;
let mydouble = 1.4444;
let undef;
let a = 'abc';


console.log(
    'mynumber', typeof mynumber,
    'istrue', typeof istrue,
    'mydouble',  typeof mydouble,
    'undef', typeof undef,
    'isNaN', typeof 5 / a
    );

mynumber = 'thi sis number';

console.log('mynumber 2', typeof mynumber);


// string 
// number
// boolean
// NaN 
// undefined
// float 

// == 
// != 
// >=
// <=

a = "bce";
// true
if (a == 'abc')
{
    console.log("yes this is abc");
} 
else if (a == 'bce')
{
    console.log("this is " + a);
} 
else 
{
    console.log("this is not abc");
}

// incerement  ++     -> +1
// decrement --  -> -1
/*
x = x + 1
x += 1

x = x - 1
x -= 1
 */

// loop

for (let idx = 0; idx < 5; idx++) 
{
    console.log(" idx = " + idx);
}

// 1 element = 0
// length - 1
let cars = ['audi', 'bmw', 'citroen', 11111, 4444, true, undefined ];
cars[3] = 'jaguar';

cars.push('volvo');
for (let index = cars.length - 1; index >= 0; index--) 
{

    //if (cars[index] == 'audi')
    /*
    if (index <= 2)
    {
        console.log('YES this is ' + cars[index]);
    } else {

        */
        //console.log('index: ' + index + '; value: ' + cars[index]);
    //}

   // if (index == 3) break;

}
//console.log('index: 3 value: ' + cars[3]);

console.log('volvo has index = ' + cars.indexOf('volvo'));


cars.forEach((value, index, array) => {
    console.log(value, index, array[index])
});


let carsObject = {
    'car': {
        'type' : 'audi',
        'color': 'red',
        'age':'25'
    },
    'car2': {
        'type' : 'bmw',
        'color': 'black',
        'age':'5',
        'wheels': ['1wheel', '2wheel', '4wheels']
    }
};

//console.log(cars, ' what is type: ', typeof cars);
// console.log(carsObject);

// console.log('car2', carsObject.car2);
// console.log('car2', carsObject.car2.wheels[1]);

let keys = Object.keys(carsObject.car2);
let values = Object.values(carsObject);
console.log(
    //Object.keys(carsObject.car2)[2];
    //keys[2]
    //values[1].wheels[2]
    'entries:',
    Object.entries(carsObject)
);


Object.entries(carsObject).forEach(function (entry) { // callback
        const [key, value] = entry;
        //console.log(key, value, entry.key, entry.value);
        console.log(entry[1].type);
    });




/*
let tmpAge = prompt("Please enter your age?");
// && - and
// || - or 

// AND &&
// true = true && true && true -> (a > 1 && b > 1 && c > 1)
// false = true && true && false -> (a > 1 && b > 1 && c > 1)

// OR ||
// true = true || false || false
// false = false || false || false

let age = parseInt(tmpAge);
// console.log (typeof age, typeof num );


if (age > 18){
//if (age > 18 && isNaN(age) == false){
    console.log('age inserted (', age, '): you are adult');
}
else if (isNaN(age) == true)
{
    console.log('change your age!');

} else {
    console.log('go away!');
}

*/
let x1 = [1,2,3,4,5,6,7,8,9];
let y1 = [1,2,3,4,5,6,7,8,9];


let result = '';
let cell = `<td>${result}</td>`;
let row = `<tr>${cell}</tr>`;
let table = `<table>${row}</table>`;
let headerCell = `<td>${result}</td>`;

for (let index_x = 0; index_x <= x1.length - 1; index_x++) 
{
    cell = '';
    for (let index_y = 0; index_y <= y1.length - 1; index_y++) 
    {
        //console.log(x1[index_x] + '*' + y1[index_y], '=', x1[index_x] * y1[index_y]);
        if (index_y == 0) cell += `<td class="col">${x1[index_x]}</td>`;
        if (index_x == 0) headerCell += `<td>${y1[index_y]}</td>`;

        result = x1[index_x] * y1[index_y];
        cell += `<td>${result}</td>`;
    }
    if (index_x == 0) row += `<thead><tr>${headerCell}</tr></thead>`;
    row += `<tr>${cell}</tr>`;
}
table = `<table id="myTable">${row}</table>`;


let div = document.getElementById('calc');
div.innerHTML = table;

function changeColor(value){
    alert('Hello ' + value);
    console.log('result ' + value);
}

let btn = document.getElementById('changeColor');
btn.addEventListener('click', function(a1) {
    changeColor('Vladimir');
    this.className = 'thead';
    /*
    let tbl = document.getElementsByTagName('table');
    console.log(tbl[0]);
    */

   let tbl = document.getElementById('myTable');
   tbl.tHead.className = 'thead';

    //
});





/*
document.write("Hello World!");
document.writeln("Hello World!"); // \n
*/


