import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [FormsModule,DropdownModule,CommonModule,RadioButtonModule,FloatLabelModule,InputTextModule,InputSwitchModule,CardModule,ButtonModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.scss'
})
export class PersonalInformationComponent {
  countries: any[] | undefined;
  selectedCountry: any | undefined;
  selectedTelCountry: any | undefined={ name: 'Australia', code: 'AU',tel:'+1' };
  gender!: string;
  idType: string='nic';
  tinOrPin: boolean = false;
  @Input()  isShowPersonalInfo!: boolean
  ngOnInit(): void {
    this.countries = [
      { name: 'Australia', code: 'AU',tel:'+1',img:'assets/countries/Australia.png' },
      { name: 'Brazil', code: 'BR',tel:'+2',img:'assets/countries/Australia.png' },
      { name: 'China', code: 'CN',tel:'+3',img:'assets/countries/Australia.png' },
      { name: 'Egypt', code: 'EG',tel:'+1',img:'assets/countries/Australia.png' },
      { name: 'France', code: 'FR',tel:'+1',img:'assets/countries/Australia.png' },
      { name: 'Germany', code: 'DE',tel:'+1',img:'assets/countries/Australia.png' },
      { name: 'India', code: 'IN',tel:'+1',img:'assets/countries/Australia.png' },
      { name: 'Japan', code: 'JP',tel:'+1',img:'assets/countries/Australia.png' },
      { name: 'Spain', code: 'ES',tel:'+1',img:'assets/countries/Australia.png' },
      { name: 'United States', code: 'US',tel:'+1' }
  ];
     this.selectedTelCountry=this.countries[0]
     this.selectedCategory = this.categories[1];
  }
 
  toggleTinPin(){
    console.log(this.tinOrPin);
    this.tinOrPin=!this.tinOrPin
    
  }

  selectedCategory: any = null;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
}
