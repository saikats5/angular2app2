import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ContentChild, ElementRef, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() { 
    console.log('Constructor Called');
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Called');
    console.log(changes); //changes-->object-->currentValue(obj properties)/firstChange/previousValue-->
  }
  ngOnInit(){
    console.log('ngOnInit Called');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    console.log(this.paragraph.nativeElement.textContent); //will work
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('ngAfterAfterViewInit');
    console.log(this.header.nativeElement.textContent); //will work
  }
  ngAfterViewChecked(){
    console.log('ngAfterAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}
