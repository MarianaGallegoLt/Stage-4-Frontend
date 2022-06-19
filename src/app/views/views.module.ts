import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidentialInformationViewComponent } from './residential-information-view/residential-information-view.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';



@NgModule({
  declarations: [
    ResidentialInformationViewComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
