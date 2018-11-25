import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ConsumptionService } from '../consumption.service';

@Component({
  selector: 'app-consumption-del',
  templateUrl: './consumption-del.component.html',
  styleUrls: ['./consumption-del.component.css']
})
export class ConsumptionDelComponent implements OnInit {

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
        consumption_date: ['', Validators.nullValidator ],
        consumption_description: ['', Validators.nullValidator ],
        consumption_amount: ['', Validators.nullValidator ]
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editConsumption(params['id']).subscribe(res => {
          this.consumption = res;
      });
    });
  }

  deleteConsumption() {
      this.route.params.subscribe(params => {
        this.bs.deleteConsumption(params['id']).then(value => { 
          this.router.navigate(['consumption/'+params['idcard']]);
        });
        
    });
  }
}


