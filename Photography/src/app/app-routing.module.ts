import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkComponent} from './work/work.component';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'work', component: WorkComponent },
  {path: 'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'**',component: WorkComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
