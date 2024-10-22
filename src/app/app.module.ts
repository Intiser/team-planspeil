import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { MainComponent } from './layout/main/main.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MembersDetailsComponent } from './pages/members-details/members-details.component';
import { VisionDetailsComponent } from './pages/vision-details/vision-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent,
    LandingPageComponent,
    MembersDetailsComponent,
    VisionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
