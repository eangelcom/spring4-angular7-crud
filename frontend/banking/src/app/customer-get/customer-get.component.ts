import { Component, OnInit } from '@angular/core';
import Customer from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-get',
  templateUrl: './customer-get.component.html',
  styleUrls: ['./customer-get.component.css']
})
export class CustomerGetComponent implements OnInit {

  customers: Customer[];

  constructor( 
    private bs: CustomerService) { 

    }

  ngOnInit() {
    this.bs
      .getCustomers()
      .subscribe((data: Customer[]) => {
        this.customers = data;
    });
  }

}

