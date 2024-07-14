import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { StepperModule } from 'primeng/stepper';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gig',
  standalone: true,
  imports: [StepperModule,ButtonModule,InputTextModule,FloatLabelModule,DropdownModule,FormsModule,EditorModule,InputTextareaModule,CommonModule],
  templateUrl: './gig.component.html',
  styleUrl: './gig.component.scss'
})
export class GigComponent {
  categories: any[] | undefined;
  selectedCategory: any | undefined;

  subCategories: any[] | undefined;
  selectedSubCategory: any | undefined;

  gigTitle:any | undefined;
  gigDescription:any |undefined 
  question:any |undefined 

  imageSrc1:any |undefined 
  imageSrc2:any |undefined 

  active: number | undefined = 0;

  ngOnInit() {
    this.categories = [
        { name: 'Graphic & Design', code: 'NY' },
        { name: 'Digital Marketing', code: 'RM' },
        { name: 'Writing & Translation', code: 'LDN' },
        { name: 'Video & Animation', code: 'IST' },
        { name: 'Music & Audio', code: 'PRS' }
    ];
    this.subCategories = [
        { name: 'Voice Over', code: 'NY' },
        { name: 'Mixing & Mastering', code: 'RM' },
        { name: 'Producers & Composers', code: 'LDN' },
        { name: 'Singers & Vocalists', code: 'IST' },
        { name: 'Session Musicians', code: 'PRS' }
    ];
}
onUpload(event:any,target:number){
  console.log(event);
  if (event.target.files && event.target.files[0]) {      
    const file = event.target.files[0];
    let objectURL = URL.createObjectURL(file);
    if(target==0){
      this.imageSrc1 = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }else{
      this.imageSrc2 = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    }
}
}
constructor(private sanitizer: DomSanitizer) { }
submit(){}

isVisibleLabel:boolean=true;
setTitle(){
  this.isVisibleLabel=false
  document.getElementById('labelTitle')?.setAttribute('style','display:none')
  this.gigTitle='I Will'
}
@HostListener('document:mousedown', ['$event'])
  onGlobalClick(event:any): void {
  
    document.getElementById('labelTitle')?.setAttribute('style','display:block')
    if(!this.isVisibleLabel){
      this.isVisibleLabel=true
      this.gigTitle=undefined
    }
  }
}
