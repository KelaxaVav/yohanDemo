import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './modules/prime-ng/prime-ng.module';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { PersonalInformationComponent } from "./components/personal-information/personal-information.component";
import { CommonModule } from '@angular/common';
import { BankingInformationComponent } from './components/banking-information/banking-information.component';
import { EditPublicProfileComponent } from "./components/edit-public-profile/edit-public-profile.component";
import { VerificationComponent } from "./components/verification/verification.component";
import { GigComponent } from "./components/gig/gig.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StepperModule, ButtonModule, PersonalInformationComponent, CommonModule, BankingInformationComponent, EditPublicProfileComponent, VerificationComponent, GigComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'yohan_demo';
  isShowPersonalInfo:boolean=false

  showPersonalInfoUpload(){
    this.isShowPersonalInfo=true
  }

  scrollTop(){
    window.scrollTo(0,0)
  }
}
