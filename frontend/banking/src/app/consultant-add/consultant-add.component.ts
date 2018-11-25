import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ConsultantService } from '../consultant.service';

@Component({
  selector: 'app-consultant-add',
  templateUrl: './consultant-add.component.html',
  styleUrls: ['./consultant-add.component.css']
})
export class ConsultantAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private bs: ConsultantService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      consultant_name: ['', Validators.required ],
      consultant_specialty: ['', Validators.required ]
    });   
  }

  addConsultant(consultant_name, consultant_specialty) {
    this.bs.addConsultant(consultant_name, consultant_specialty).then(value => {
      this.router.navigate(['consultant']);
    });
  }

  ngOnInit() {
  }

}
