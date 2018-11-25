
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: CustomerService,
    private fb: FormBuilder) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editCustomer(params['id']).subscribe(res => {
          this.customer = res;
      });
    });
  }

  updateCustomer(customer_name, customer_city, customer_address, customer_phone) {
      this.route.params.subscribe(params => {
        this.bs.updateCustomer(customer_name, customer_city, customer_address, customer_phone, params['id']).then(value => {
            this.router.navigate(['customer']);
        });
        
    });
  }
}
