import { Component, input, signal } from '@angular/core';
import { GreetiungComponent } from '../components/greetiung/greetiung.component';

@Component({
  selector: 'app-home',
  imports: [GreetiungComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeMessage = signal('Hello, wordd');

  keyUpHandler (event: KeyboardEvent){
    console.log(`user pressed the ${event.key} key`);
  }
}
