import { Component } from '@angular/core';
import { HerosComponent } from './heros/heros.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';
}
