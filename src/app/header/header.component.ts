import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "Hello World"

  constructor() {}

  ngOnInit(): void {
  }

  changeTilte($event: PointerEvent){
    console.log($event);
    if($event.ctrlKey){
      this.title = "The Will Will Web";
    }

  }

}
