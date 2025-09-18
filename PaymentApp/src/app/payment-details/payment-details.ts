import { Component, OnInit } from '@angular/core';
import { PaymentDetailForm } from './payment-detail-form/payment-detail-form'
import { PaymentDetailService } from '../shared/payment-detail-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  standalone: true, 
  imports: [CommonModule,PaymentDetailForm],
  templateUrl: './payment-details.html',
  styles: ``
})
export class PaymentDetails implements OnInit {
    constructor(public service: PaymentDetailService){
    
    }
  ngOnInit(): void {
   this.service.refreshList();
  }
}
