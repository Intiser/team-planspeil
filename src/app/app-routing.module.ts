import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path:  '', component:  MainComponent},
  { path:  'profile', component:  ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
