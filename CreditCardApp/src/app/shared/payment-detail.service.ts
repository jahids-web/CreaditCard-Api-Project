import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  constructor(private http : HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/PaymentDetail/'; //

  formData: PaymentDetail = new PaymentDetail();
  paymentDetailList!: PaymentDetail[];

  

  public postPaymentDetail(params : any) {
    return this.http.post(this.baseURL + 'PostPaymentDetail', params);
  }



  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL + 'DeletePaymentDetail'}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL + 'GetPaymentDetails')
      .toPromise()
      .then(res =>this.paymentDetailList = res as PaymentDetail[]);
  }
}