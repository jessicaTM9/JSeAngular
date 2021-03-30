import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { InfoComponent } from '../pages/info/info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':user/:repository', component: InfoComponent },
];

const components = {
  HomeComponent,
  InfoComponent,
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
