import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';

const routes: Routes = [
  { path:  '', component:  MainComponent},
  { path:  'profile', component:  ProfileComponent},
  { path:  'impressum', component:  ImpressumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
