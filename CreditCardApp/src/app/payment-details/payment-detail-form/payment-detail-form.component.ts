import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service : PaymentDetailService, private fb : FormBuilder) { }
  form! : FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    this.service.postPaymentDetail(this.form.value).subscribe(
      res => {
        this.resetForm();
        this.service.refreshList();
        
        alert("Data has been successfully saved.")
        // this.commonService.toastSuccess('Data has been successfully saved.', 'Success');
      },
      error => {console.log(error); }
    );

  }

  
  createForm(){
    this.form = this.fb.group({
      paymentDetailId : [0],
      cardOwnerName : [''],
      cardNumber : [''],
      expirationDate : [''],
      securityCode : ['']
    });
  }  

  resetForm() {
    this.form.reset();
    this.service.formData = new PaymentDetail();
  }  

}

