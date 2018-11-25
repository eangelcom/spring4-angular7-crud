import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addConsumption(consumption_date, consumption_description, consumption_amount, idcard) {
    const obj = {
      card: {id: idcard},
      date: consumption_date,
      description: consumption_description,
      amount: consumption_amount
    };
    console.log(obj);
    return this.http.post(`${this.uri}/consumptions`, obj)
          .toPromise();
  }

  getConsumptions(idcard) {
    return this
           .http
           .get(`${this.uri}/consumptionsbycard/${idcard}`);
  }

  editConsumption(id) {
    return this
            .http
            .get(`${this.uri}/consumptions/${id}`);
  }

  updateConsumption(consumption_date, consumption_description, consumption_amount, id) {

    const obj = {
        date: consumption_date,
        description: consumption_description,
        amount: consumption_amount
      };
      
    return this
      .http
      .put(`${this.uri}/consumptions/${id}`, obj)
      .toPromise();
  }

  deleteConsumption(id) {
    return this
              .http
              .delete(`${this.uri}/consumptions/${id}`)
              .toPromise();
  }

}
