# angular2app2

@Input is a decorator for passing data into the component
@Output is a decorator for passing data out of the component
EventEmitter is a generic type --> new EventEmitter<{serverName: string, serverContent: string}>();

view encapsulation, css in parent component doesn't work on child component, we have to move the required css to the associated component, it creates unique attribute along with element, every elemnet in particular component contains unique arribute so that the style gets affected it only and can be seen on inspect element, kind of shadow dom technology which is not support on all the browsers

we can override view encapsulation by adding
encapsulation: ViewEncapsulation.(Native/None/Emulated) //Emulated is by default //ViewEncapsulation needs to be imported from angular/core, and it's for particular component

Emulated - show unique attribute
None - doesn't show any attribute
Native - uses shadow dom technology due to which it will work only on those browsers which support shadow dom technology

Local reference can be added using # , instead of ngModel(2 way binding when not required)
