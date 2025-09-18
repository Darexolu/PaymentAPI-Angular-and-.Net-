import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PaymentDetails} from './payment-details/payment-details';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet,PaymentDetails],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('PaymentApp');
}
