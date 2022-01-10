import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChallengeQualityHelpComponent } from './challenge-quality-help/challenge-quality-help.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent ,
  children:[
  { path: 'home', component: HomeComponent },
  { path: 'challenge-quality-help', component: ChallengeQualityHelpComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
