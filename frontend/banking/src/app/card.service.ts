import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  uri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addCard(card_number, card_ccv, card_type, idcustomer) {
    const obj = {
      customer: {id: idcustomer},
      number: card_number,
      ccv: card_ccv,
      type: card_type
    };
    console.log(obj);
    return this.http.post(`${this.uri}/cards`, obj)
          .toPromise();
  }

  getCards(idcustomer) {
    return this
           .http
           .get(`${this.uri}/cardsbycustomer/${idcustomer}`);
  }

  editCard(id) {
    return this
            .http
            .get(`${this.uri}/cards/${id}`);
  }

  updateCard(card_number, card_ccv, card_type, id) {

    const obj = {
        number: card_number,
        ccv: card_ccv,
        type: card_type      
      };
      
    return this
      .http
      .put(`${this.uri}/cards/${id}`, obj)
      .toPromise();
  }

  deleteCard(id) {
    return this
              .http
              .delete(`${this.uri}/cards/${id}`)
              .toPromise();
  }

  creditCardFormat(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []
    var i = 0;
    var len = 0;
    for (i=0, len=match.length; i<len; i+=4) {
      parts.push(match.substring(i, i+4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

}

