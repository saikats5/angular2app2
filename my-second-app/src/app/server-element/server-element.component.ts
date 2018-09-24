import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() { 
    console.log('Constructor Called');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Called');
    console.log(changes); //changes-->object-->currentValue(obj properties)/firstChange/previousValue-->
  }
  ngOnInit() {
    console.log('ngOnInit Called');
  }
  ngOn

}
