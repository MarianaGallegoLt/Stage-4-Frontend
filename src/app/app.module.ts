import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PersonalInformationViewComponent } from './views/personal-information-view/personal-information-view.component';
import { ResidentialInformationViewComponent } from './views/residential-information-view/residential-information-view.component';
import { ResumeViewComponent } from './views/resume-view/resume-view.component';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
