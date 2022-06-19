import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResidentialInformationViewComponent } from './residential-information-view/residential-information-view.component';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ToolbarComponent } from '../shared/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { PersonalInformationViewComponent } from './personal-information-view/personal-information-view.component';
import { PersonalInfoResumeComponent } from './resume-view/personal-info-resume/personal-info-resume.component';
import { ResidentialInfoResumeComponent } from './resume-view/residential-info-resume/residential-info-resume.component';



@NgModule({
  declarations: [
    PersonalInformationViewComponent,
    ResidentialInformationViewComponent,
    ResumeViewComponent,
    PersonalInfoResumeComponent,
    ResidentialInfoResumeComponent
  ],
  exports: [
    PersonalInformationViewComponent,
    ResidentialInformationViewComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ViewsModule { }
