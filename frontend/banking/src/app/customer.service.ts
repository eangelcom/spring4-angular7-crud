import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addCustomer(customer_name, customer_city, customer_address, customer_phone) {
    const obj = {
      name: customer_name,
      city: customer_city,
      address: customer_address,
      phone: customer_phone
    };
    console.log(obj);
    return this.http.post(`${this.uri}/customers`, obj)
          .toPromise();
  }

  getCustomers() {
    return this
           .http
           .get(`${this.uri}/customers`);
  }

  editCustomer(id) {
    return this
            .http
            .get(`${this.uri}/customers/${id}`);
  }

  updateCustomer(customer_name, customer_city, customer_address, customer_phone, id) {

    const obj = {
        name: customer_name,
        city: customer_city,
        address: customer_address,
        phone: customer_phone
      };
      
    return this
      .http
      .put(`${this.uri}/customers/${id}`, obj)
      .toPromise();
  }

  deleteCustomer(id) {
    return this
              .http
              .delete(`${this.uri}/customers/${id}`)
              .toPromise();
  }

}

