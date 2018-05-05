import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {WorkComponent} from './work/work.component';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
