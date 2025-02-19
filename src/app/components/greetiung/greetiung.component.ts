import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greetiung',
  imports: [],
  templateUrl: './greetiung.component.html',
  styleUrl: './greetiung.component.css'
})
export class GreetiungComponent {
  message = input('Hello,, World12!');
}
