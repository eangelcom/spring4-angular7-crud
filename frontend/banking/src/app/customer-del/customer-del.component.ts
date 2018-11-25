import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-del',
  templateUrl: './customer-del.component.html',
  styleUrls: ['./customer-del.component.css']
})
export class CustomerDelComponent implements OnInit {

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
        customer_name: ['', Validators.nullValidator ],
        customer_city: ['', Validators.nullValidator ],
        customer_address: ['', Validators.nullValidator ],
        customer_phone: ['', Validators.nullValidator ]
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editCustomer(params['id']).subscribe(res => {
          this.customer = res;
      });
    });
  }

  deleteCustomer() {
      this.route.params.subscribe(params => {
        this.bs.deleteCustomer(params['id']).then(value => { 
          this.router.navigate(['customer']);
        });
        
    });
  }
}

