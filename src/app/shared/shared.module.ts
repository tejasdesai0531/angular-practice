import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
