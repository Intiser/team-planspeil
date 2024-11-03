import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
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
import { MemberDialogComponent } from './pages/member-dialog/member-dialog.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent,
    LandingPageComponent,
    MembersDetailsComponent,
    VisionDetailsComponent,
    TeamCardComponent,
    MemberDialogComponent,
    ProfileComponent,
    AboutComponent,
    FooterComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
