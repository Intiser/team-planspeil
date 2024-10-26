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
import { TeamCardComponent } from './layout/team-card/team-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent,
    LandingPageComponent,
    MembersDetailsComponent,
    VisionDetailsComponent,
    TeamCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
