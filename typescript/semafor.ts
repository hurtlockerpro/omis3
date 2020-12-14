


class Semafor{

    semafor:HTMLDivElement;

    red:string = 'red';
    yellow:string = 'yellow';
    green:string = 'green';
    gray:string = 'gray';

    counter:number = 1;

    Timer = [
        {
            name: 'red',
            timer: 1
        },
        {
            name: 'yellow',
            timer: 2
        },
        {   
            name: 'green',
            timer: 3
        }
    ]

    constructor (semafor:HTMLDivElement){
        this.semafor = semafor;
        // init semafor
        this.renderSemafor(this.createElememt(this.red));
        this.renderSemafor(this.createElememt(this.gray));
        this.renderSemafor(this.createElememt(this.gray));

        this.setColorIndex(1);

        //this.runSemafor();
    }

    createElememt(name:string):HTMLDivElement 
    {
        let div:HTMLDivElement = document.createElement('div');
        div.id = name;
        div.classList.add('block')
        div.classList.add(name); 

        return div;
    }

    renderSemafor(div:HTMLDivElement):void{
        this.semafor.innerHTML += div.outerHTML;
    }

    getCurrentSecond():number{
        return this.counter;
    }

    setCurrentSecond ():void {
        this.counter++;
    }

    getSemaforCircle():number{
        let totalSeconds:number = 0;
        Object.keys(this.Timer).map(key => {
            //console.log(key,' - ', this.Timer[key]);
            totalSeconds +=  this.Timer[key].timer;
        });
        return totalSeconds;
    }

    runSemafor():void{

        let div = '';
     
        // yellow
        for (let i = 0; i <= 2; i++) {
            if (i == activeIndex){
                div += this.renderSemafor(this.createElememt(this.Timer[activeIndex].name));
            }
            div += this.renderSemafor(this.createElememt(this.gray));
        }


     
    }
}

let semafor = document.getElementById('semafor');
let s = new Semafor(semafor);
setInterval(function(){
    s.runSemafor();
    s.setCurrentSecond();

}, 1000);