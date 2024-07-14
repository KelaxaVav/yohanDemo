import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [ButtonModule,FileUploadModule,ToastModule,MessagesModule,HttpClientModule,CommonModule ],
  providers: [MessageService],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent {

  
  imageSrc: any | undefined;
  onUpload(event:any){
    console.log(event);
    if (event.target.files && event.target.files[0]) {      
      const file = event.target.files[0];
      let objectURL = URL.createObjectURL(file);
      this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
  }

  constructor(public  messageService: MessageService, private sanitizer: DomSanitizer) { }

  onBasicUploadAuto(event: UploadEvent) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }
}
