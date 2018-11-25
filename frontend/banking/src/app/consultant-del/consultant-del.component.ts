import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-consultant-del',
  templateUrl: './consultant-del.component.html',
  styleUrls: ['./consultant-del.component.css']
})
export class ConsultantDelComponent implements OnInit {

  consultant: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: ConsultantService,
    private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
        consultant_name: ['', Validators.nullValidator ],
        consultant_specialty: ['', Validators.nullValidator ]
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editConsultant(params['id']).subscribe(res => {
          this.consultant = res;
      });
    });
  }

  deleteConsultant() {
      this.route.params.subscribe(params => {
        this.bs.deleteConsultant(params['id']).then(value => { 
          this.router.navigate(['consultant']);
        });
        
    });
  }
}

