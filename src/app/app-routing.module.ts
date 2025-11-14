import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'about', component: AboutComponent },
  // add more routes like this later
  { path: 'services', component: ServicesComponent },
  // { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: '' } // wildcard -> home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
