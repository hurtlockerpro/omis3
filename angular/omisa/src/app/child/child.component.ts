import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  //template:`<html></html>......`
  styleUrls: ['./child.component.scss']
  //styles:[`h2{....}`]
})
export class ChildComponent implements OnInit {

  @Input() lastName:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
