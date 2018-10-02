import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../pd-input/common/input-ref.directive';

@Component({
  selector: 'app-pd-input',
  templateUrl: './pd-input.component.html',
  styleUrls: ['./pd-input.component.css']
})
export class PdInputComponent implements AfterContentInit {

  constructor() { }

  @Input() 
  icon: string;

  @ContentChild(InputRefDirective)
  input:InputRefDirective;

  ngAfterContentInit(){
    if(!this.input){
      console.error('this app-pd-input component needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocused(){
    return this.input ? this.input.focus: false;
  }

  get classes(){
    const cssClasses = {};
    if(this.icon){
      cssClasses['fa-'+ this.icon] = true;
    }
    return cssClasses;
  }

}
