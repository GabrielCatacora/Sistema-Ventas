import { Component, ViewEncapsulation,} from '@angular/core';
//import { LoginComponent } from './pages/shared/login/login/login.component';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'Sistema-Ventas';

}
