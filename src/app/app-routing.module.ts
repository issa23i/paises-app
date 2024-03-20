import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';


import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [

  {
    path: 'about',
    pathMatch: 'full',
    component: AboutPageComponent
  },
  {
    path:'contact',
    pathMatch: 'full',
    component: ContactPageComponent
  },
  {
    path:'home',
    pathMatch: 'full',
    component: HomePageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
