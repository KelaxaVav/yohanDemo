import { NgModule } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';

import { FloatLabelModule } from 'primeng/floatlabel';

import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StepperModule,
    ButtonModule,
    DropdownModule,
    RadioButtonModule,
    InputTextModule,
  ],
  providers: []
})
export class PrimeNgModule { }
