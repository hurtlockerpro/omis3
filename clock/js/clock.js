

let hour = document.getElementById('hr');
let minute = document.querySelector('#mn');
let second = document.querySelector('#sc');


setInterval(function(){ 
    
    let date = new Date();

    // 360
    let s = date.getSeconds() * 360 / 60; // rotateZ(xxxdeg)
    let m = date.getMinutes() * 360 / 60 + s / 60;
    let h = date.getHours() * 360 / 12 + m / 12;

    second.style.transform = 'rotateZ( ' + s +  'deg)';
    minute.style.transform = 'rotateZ( ' + m +  'deg)';
    hour.style.transform = 'rotateZ( ' + h +  'deg)';

    /*
    console.log(date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' 
    + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    */

}, 1000);


class Reqtangle{

    constructor(name, height, width) {
        this.name = name;
        this.height = height;
        this.width = width;
    }
    /*
    static setPerimetr(){
        console.log('perimentr');
    }
    */
    setWidth(number){
        this.print('width: ' + number);
    }

    setHeight(number){
        this.print('height: ' + number);
    }

    getArea(number){
        this.print('area: ' + this.height * this.width);
    }

    print(msg){
        console.log(msg);
    }

    //#msg = 'hello world'
    
    #author = 'copyright author is Vladimir';
    get myheight() {
        // if ()
        return this.height
    }
    set myheight(x) {
        // if ()
        this.height = x
    }
    
}

class X extends Reqtangle {

}

let y = new X();



//Reqtangle.setPerimetr();


let btn1 = new Reqtangle('btn1', 10, 20);
/*
let btn2 = new Reqtangle('btn2', 15, 25);
let btn3 = new Reqtangle('btn3', 20, 30);
*/
// ...
btn1.getArea();

btn1.myheight = 55;

btn1.getArea();


btn1.setHeight(55)

/*
console.log('btn 1: ' + btn1.name + ' ');
console.log('btn 2: ' + btn1.name);
console.log('btn 3: ' + btn3.name);
*/
/*
req.author = 'Sergei';

console.log(req.author);
req.setWidth(25)
req.setHeight(35)
req.print('Hello worlrd!')
*/

