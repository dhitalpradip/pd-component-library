import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdInputComponent } from './pd-input/pd-input.component';
import { InputRefDirective } from './pd-input/common/input-ref.directive';

@NgModule({
  declarations: [PdInputComponent, InputRefDirective],
  imports: [
      CommonModule
    ],
    exports:[PdInputComponent, InputRefDirective]
})
export class PdInputModule { }
