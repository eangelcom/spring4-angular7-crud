import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router,
    private bs: CardService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      card_number: ['', Validators.required ],
      card_ccv: ['', Validators.required ],
      card_type: ['', Validators.required ]
    });   
  }

  addCard(card_number, card_ccv, card_type) {
    this.route.params.subscribe(params => {
      this.bs.addCard(card_number.split(' ').join(''), card_ccv, card_type, params['idcustomer']).then(value => {
          this.router.navigate(['card/'+params['idcustomer']]);
      });  
    });
  }

  ngOnInit() {
  }

}

