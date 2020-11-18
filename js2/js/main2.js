
let template = {
    items: [
        {
            title:'',
            href:''
        },
        {
            title:'',
            href:''
        },
        {
            title:'',
            href:''
        },
    ],
};




class newOne {
    constructor(item, result){
        // global array
        this.items = {itemsA: [
            {
                title:'link1',
                href:'href1'
            },
            {
                title:'link2',
                href:'href2'
            }
        ]};

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
        let i = 0;
        Object.entries(this.items.itemsA).forEach(function (entry) { // callback
            const [key, value] = entry;
            //console.log(key, value, entry.key, entry.value);
            //console.log(entry);
            console.log('title: ', entry[1].title);
            //this.debug(entry[i++].title);
        });

        /*
        this.items.forEach(element => { 

            let a = this.generateA(element);
            if (this.items.length >= 2){
                a.href = "fourth element";
            }
            this.debug(a);
            this.result.innerHTML += a.outerHTML + '<br>';
        });*/
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
    
}


let btn = document.querySelector('input[type="button"]');
let result = document.getElementById('result');
let item = document.getElementById('item'); 

// let div1 = new MyItems(item, result);
let div1 = new newOne(item, result);


//let div2 = new MyItems(item, result);

btn.addEventListener('click', () => {
    //div1.addItem();
    div1.showItems();
});