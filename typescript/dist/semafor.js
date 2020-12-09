var Semafor = /** @class */ (function () {
    function Semafor(semafor) {
        this.red = 'red';
        this.yellow = 'yellow';
        this.green = 'green';
        this.gray = 'gray';
        this.counter = 1;
        this.Timer = [
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
        ];
        this.semafor = semafor;
        // init semafor
        this.renderSemafor(this.createElememt(this.red));
        this.renderSemafor(this.createElememt(this.gray));
        this.renderSemafor(this.createElememt(this.gray));
        this.setColorIndex(1);
        //this.runSemafor();
    }
    Semafor.prototype.createElememt = function (name) {
        var div = document.createElement('div');
        div.id = name;
        div.classList.add('block');
        div.classList.add(name);
        return div;
    };
    Semafor.prototype.renderSemafor = function (div) {
        this.semafor.innerHTML += div.outerHTML;
    };
    Semafor.prototype.getColorIndex = function () {
        return this.counter;
    };
    Semafor.prototype.setColorIndex = function (index) {
        if (index >= 4)
            index = 3;
        this.counter = index;
    };
    Semafor.prototype.getSemaforCircle = function () {
        var _this = this;
        var totalSeconds = 0;
        Object.keys(this.Timer).map(function (key) {
            //console.log(key,' - ', this.Timer[key]);
            totalSeconds += _this.Timer[key].timer;
        });
        return totalSeconds;
    };
    Semafor.prototype.runSemafor = function (activeIndex) {
        console.log(parseInt(this.Timer[activeIndex].timer));
        //if (this.getColorIndex() == activeIndex)
        //{
        var div = '';
        setTimeout(function () {
            // yellow
            for (var i = 0; i <= 2; i++) {
                if (i == activeIndex) {
                    div += this.renderSemafor(this.createElememt(this.Timer[activeIndex].name));
                }
                div += this.renderSemafor(this.createElememt(this.gray));
            }
            //this.setColorIndex(index + 1);
        }, parseInt(this.Timer[activeIndex].timer) * 1000);
        //}
    };
    return Semafor;
}());
var semafor = document.getElementById('semafor');
var s = new Semafor(semafor);
//setInterval(function(){
s.runSemafor(1);
//}, 1000);
