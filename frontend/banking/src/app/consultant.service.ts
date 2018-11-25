import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addConsultant(consultant_name, consultant_specialty) {
    const obj = {
      name: consultant_name,
      specialty: consultant_specialty
    };
    console.log(obj);
    return this.http.post(`${this.uri}/consultants`, obj)
          .toPromise();
  }

  getConsultants() {
    return this
           .http
           .get(`${this.uri}/consultants`);
  }

  editConsultant(id) {
    return this
            .http
            .get(`${this.uri}/consultants/${id}`);
  }

  updateConsultant(consultant_name, consultant_specialty, id) {

    const obj = {
        name: consultant_name,
        specialty: consultant_specialty
      };
      
    return this
      .http
      .put(`${this.uri}/consultants/${id}`, obj)
      .toPromise();
  }

  deleteConsultant(id) {
    return this
              .http
              .delete(`${this.uri}/consultants/${id}`)
              .toPromise();
  }

}
