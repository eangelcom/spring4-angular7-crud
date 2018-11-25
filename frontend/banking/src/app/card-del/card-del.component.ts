import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-del',
  templateUrl: './card-del.component.html',
  styleUrls: ['./card-del.component.css']
})
export class CardDelComponent implements OnInit {

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
        card_number: ['', Validators.nullValidator ],
        card_ccv: ['', Validators.nullValidator ],
        card_type: ['', Validators.nullValidator ]
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editCard(params['id']).subscribe(res => {
          this.card = res;
      });
    });
  }

  deleteCard() {
      this.route.params.subscribe(params => {
        this.bs.deleteCard(params['id']).then(value => { 
          this.router.navigate(['card/'+params['idcustomer']]);
        });
        
    });
  }
}

