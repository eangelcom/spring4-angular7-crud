import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private bs: CustomerService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      customer_name: ['', Validators.required ],
      customer_city: ['', Validators.required ],
      customer_address: ['', Validators.required ],
      customer_phone: ['', Validators.required ]
    });   
  }

  addCustomer(customer_name, customer_city, customer_address, customer_phone) {
    this.bs.addCustomer(customer_name, customer_city, customer_address, customer_phone).then(value => {
      this.router.navigate(['customer']);
    });
  }

  ngOnInit() {
  }

}

