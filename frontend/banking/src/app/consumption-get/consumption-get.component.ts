import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Consumption from '../Consumption';
import { ConsumptionService } from '../consumption.service';

@Component({
  selector: 'app-consumption-get',
  templateUrl: './consumption-get.component.html',
  styleUrls: ['./consumption-get.component.css']
})
export class ConsumptionGetComponent implements OnInit {

  consumptions: Consumption[];

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private bs: ConsumptionService) { 

    }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.getConsumptions(params['idcard']).subscribe((data: Consumption[]) => {
          this.consumptions = data;
      });
    });
  }

}

