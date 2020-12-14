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
    Semafor.prototype.getCurrentSecond = function () {
        return this.counter;
    };
    Semafor.prototype.setCurrentSecond = function () {
        this.counter++;
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
    Semafor.prototype.runSemafor = function () {
        var div = '';
        // yellow
        for (var i = 0; i <= 2; i++) {
            if (i == activeIndex) {
                div += this.renderSemafor(this.createElememt(this.Timer[activeIndex].name));
            }
            div += this.renderSemafor(this.createElememt(this.gray));
        }
    };
    return Semafor;
}());
var semafor = document.getElementById('semafor');
var s = new Semafor(semafor);
setInterval(function () {
    s.runSemafor();
    s.setCurrentSecond();
}, 1000);
