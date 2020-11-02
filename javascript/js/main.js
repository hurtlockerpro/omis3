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


