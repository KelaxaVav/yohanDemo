import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-edit-public-profile',
  standalone: true,
  imports: [InputSwitchModule,FormsModule,InputTextareaModule,CommonModule,ButtonModule,FloatLabelModule,InputTextModule,CalendarModule,DropdownModule],
  templateUrl: './edit-public-profile.component.html',
  styleUrl: './edit-public-profile.component.scss'
})
export class EditPublicProfileComponent {
  doNotDisplay:boolean=true
  aboutVal:string | undefined
  enableAbout:boolean=false
  enableEducation:boolean=false
  addEducation:boolean=false
  enableLanguage:boolean=false
  enableSkills:boolean=false
  enableProfiles:boolean=false

  date: Date[] | undefined;
  selectedMajor:any | undefined
  major:any[]=[
    {
      name:'High School'
    },
    {
      name:'Associate'
    }
  ]
  selectedDegree:any | undefined
  degree:any[]=[
    {
      name:'High School'
    },
    {
      name:'Associate'
    }
  ]
  selectedSchoolCountry:any | undefined
  country:any[]=[
    {
      name:'High School'
    },
    {
      name:'Associate'
    }
  ]
  selectedLanguage:any | undefined
  language:any[]=[
    {
      name:'Afrikaans'
    },
    {
      name:'Akan'
    }
  ]
  selectedSkill:any | undefined
  skills:any[]=[
    {
      name:'Graphics & Design'
    },
    {
      name:'Digital Marketing'
    }
  ]
  enableDisableAbout(){
    this.enableAbout=!this.enableAbout
  }
  enableDisableEducation(){
    this.enableEducation=!this.enableEducation
  }
  enableDisableLanguage(){
    this.enableLanguage=!this.enableLanguage
  }
  enableDisableSkills(){
    this.enableSkills=!this.enableSkills
  }
  enableDisableProfiles(){
    this.enableProfiles=!this.enableProfiles
    this.saveProfileData=false
  }

  submit(){
    this.addEducation=true
    this.enableEducation=false
  }

  saveProfileData:boolean=false
  saveProfile(){
    this.saveProfileData=true
  }
}
