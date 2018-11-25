import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Card from '../Card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-get',
  templateUrl: './card-get.component.html',
  styleUrls: ['./card-get.component.css']
})
export class CardGetComponent implements OnInit {

  cards: Card[];

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private bs: CardService) { 

    }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.getCards(params['idcustomer']).subscribe((data: Card[]) => {
          this.cards = data;
      });
    });
  }

}

