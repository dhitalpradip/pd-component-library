import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'app-pd-input input'
})
export class InputRefDirective {

  constructor() { }

  focus = false;

  @HostListener('focus')
  onfocus(){
    this.focus = true;
  }
  @HostListener('blur')
  onblur(){
    this.focus = false;
  }

}
