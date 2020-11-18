

class MyItems{

    constructor(item, result){
        // global array
        this.items = [];

        // colors 
        this.colors = ['red', 'green', 'blue'];

        //this.debug('type: '  + typeof result)
        if (typeof result == 'object' && typeof item == "object")
        {
            this.result = result;
            this.item = item; 
        } else {
            throw 'Insert Object';
        }
    }

    addItem()
    {
        let itemTitle = this.item.value;
        this.debug (itemTitle);
        this.items.push(itemTitle)
    }

    showItems()
    {
        this.result.innerHTML = '';
        this.items.forEach(function (element){ 

            let a = this.generateA(element);
            if (this.items.length >= 2){
                a.href = "fourth element";
            }
            this.debug(a);
            this.result.innerHTML += a.outerHTML + '<br>';
        });
    }

    generateA(title, href = '#'){
        //return `<a href="${href}">${title}</a>`;
        var a = document.createElement("A");
        a.innerText = title;
        a.href = href;
        a.classList.add(this.colors[this.getRandomInt(3)]); 
        return a;
    }

    debug (msg){
        console.log(msg);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

} // end of class


