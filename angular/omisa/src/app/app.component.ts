import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*
  template: `Welcome {{ firstname }} !!!
  !!!!!!!        ----`,
  */
  styleUrls: ['./app.component.scss']
  // styles
})
export class AppComponent {
  title = 'omisa';
  firstname:string = "Vladimir";
  totalClicks:number = 0;
  isRed: boolean = false;
  myIf: boolean = false;

  myIf2: boolean = false;

  cars = ['audi', 'bmw', 'citroen'];


  increment() :void
  {
    this.totalClicks++; 
  }

  decrement($event:any) :void
  {
     this.totalClicks--;
    console.log($event); 
  }

  setValue() {
    this.firstname = 'Nancy';
  }

  switchColor(): void {
    this.isRed = !this.isRed;
  }

  addCar(): void {
    this.cars.push('ddd');
  }





  //
}
