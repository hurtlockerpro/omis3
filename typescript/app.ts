
let _y: number = 10;
let _color: string = "blue";
color = 'red';


let list: number[] = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error

enum Color {
    Red = 22,
    Green,
    Blue,
  }
  
let c: Color = Color.Green;

const maybe: string;

if (typeof maybe === "string") {
    // TypeScript knows that maybe is a string
    const _String: string = maybe;
    // So, it cannot be a boolean
    const _Boolean: boolean = maybe;
  // Type 'string' is not assignable to type 'boolean'.
  }


  function getValue(key: string): number {
    return 10;
  };

  let z:number = getValue(222);

  let v:undefined = undefined;


  interface LabeledValue {
    label: string;
  }

  interface book {
    title: string,
    author?: string,
    readonly description: string,
    publish_date: Date,
    page: number,
}

function buildName1(firstName, lastName) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
  }

function buildName2(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
  }


  function buildName(firstName: string, lastName:string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }

// overload 
function pickCard(x: any): any {}
function pickCard(x: number): number  { return 10; }
function pickCard(x: string): string { return "abc"; }

//pickCard();

console.log("Hello from TypeScript " + y);
/*
class a{
    #x;
    let y;
    static D;
}

new a()
a::D
*/
/*
function identity<T>(arg: T): T {
    return arg;
  }

  identity:string()
  identity:number()
  */