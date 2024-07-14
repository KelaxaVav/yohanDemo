import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-banking-information',
  standalone: true,
  imports: [FloatLabelModule,InputSwitchModule,InputTextModule,DropdownModule,FormsModule],
  templateUrl: './banking-information.component.html',
  styleUrl: './banking-information.component.scss'
})
export class BankingInformationComponent {
  bankList: any[] | undefined;
  selectedBank: any | undefined;

  ngOnInit(): void {
    this.bankList = [
      { name: 'Australia', code: 'AU',tel:+1,img:'assets/countries/Australia.png' },
      { name: 'Brazil', code: 'BR',tel:+1,img:'assets/countries/Australia.png' },
      { name: 'China', code: 'CN',tel:+1,img:'assets/countries/Australia.png' },
      { name: 'Egypt', code: 'EG',tel:+1,img:'assets/countries/Australia.png' },
      { name: 'France', code: 'FR',tel:+1,img:'assets/countries/Australia.png' },
      { name: 'Germany', code: 'DE',tel:+1,img:'assets/countries/Australia.png' },
      { name: 'India', code: 'IN',tel:+1,img:'assets/countries/Australia.png' },
      { name: 'Japan', code: 'JP',tel:+1,img:'assets/countries/Australia.png' },
      { name: 'Spain', code: 'ES',tel:+1,img:'assets/countries/Australia.png' },
      { name: 'United States', code: 'US',tel:+1 }
  ];
  }
 
}
