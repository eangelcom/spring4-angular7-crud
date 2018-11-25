
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-consultant-edit',
  templateUrl: './consultant-edit.component.html',
  styleUrls: ['./consultant-edit.component.css']
})
export class ConsultantEditComponent implements OnInit {

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
        consultant_name: ['', Validators.required ],
        consultant_specialty: ['', Validators.required ]
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editConsultant(params['id']).subscribe(res => {
          this.consultant = res;
      });
    });
  }

  updateConsultant(consultant_name, consultant_specialty) {
      this.route.params.subscribe(params => {
        this.bs.updateConsultant(consultant_name, consultant_specialty, params['id']).then(value => {
            this.router.navigate(['consultant']);
        });
        
    });
  }
}
