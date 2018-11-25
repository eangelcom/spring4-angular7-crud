import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ConsumptionService } from '../consumption.service';

@Component({
  selector: 'app-consumption-add',
  templateUrl: './consumption-add.component.html',
  styleUrls: ['./consumption-add.component.css']
})
export class ConsumptionAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router,
    private bs: ConsumptionService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      consumption_date: ['', Validators.required ],
      consumption_description: ['', Validators.required ],
      consumption_amount: ['', Validators.required ]
    });   
  }

  addConsumption(consumption_date, consumption_description, consumption_amount) {
    this.route.params.subscribe(params => {
      this.bs.addConsumption(consumption_date, consumption_description, consumption_amount, params['idcard']).then(value => {
          this.router.navigate(['consumption/'+params['idcard']]);
      });
      
    });
  }

  ngOnInit() {
  }

}

