
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ConsumptionService } from '../consumption.service';

@Component({
  selector: 'app-consumption-edit',
  templateUrl: './consumption-edit.component.html',
  styleUrls: ['./consumption-edit.component.css']
})
export class ConsumptionEditComponent implements OnInit {

  consumption: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: ConsumptionService,
    private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
        consumption_date: ['', Validators.required ],
        consumption_description: ['', Validators.required ],
        consumption_amount: ['', Validators.required ]
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editConsumption(params['id']).subscribe(res => {
          this.consumption = res;
      });
    });
  }

  updateConsumption(consumption_date, consumption_description, consumption_amount) {
      this.route.params.subscribe(params => {
        this.bs.updateConsumption(consumption_date, consumption_description, consumption_amount, params['id']).then(value => {
            this.router.navigate(['consumption/'+params['idcard']]);
        });
        
    });
  }
}
