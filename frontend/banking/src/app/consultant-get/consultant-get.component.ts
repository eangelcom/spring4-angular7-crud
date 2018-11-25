import { Component, OnInit } from '@angular/core';
import Consultant from '../Consultant';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-consultant-get',
  templateUrl: './consultant-get.component.html',
  styleUrls: ['./consultant-get.component.css']
})
export class ConsultantGetComponent implements OnInit {

  consultants: Consultant[];

  constructor( 
    private bs: ConsultantService) { 

    }

  ngOnInit() {
    this.bs
      .getConsultants()
      .subscribe((data: Consultant[]) => {
        this.consultants = data;
    });
  }

}
