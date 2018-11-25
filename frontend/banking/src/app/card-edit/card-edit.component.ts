
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {

  card: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: CardService,
    private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
        card_number: ['', Validators.required ],
        card_ccv: ['', Validators.required ],
        card_type: ['', Validators.required ]
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editCard(params['id']).subscribe(res => {
          this.card = res;
          this.card.number = this.bs.creditCardFormat(this.card.number);
      });
    });
  }

  updateCard(card_number, card_ccv, card_type) {
      this.route.params.subscribe(params => {
        this.bs.updateCard(card_number.split(' ').join(''), card_ccv, card_type, params['id']).then(value => {
            this.router.navigate(['card/'+params['idcustomer']]);
        });
        
    });
  }
}