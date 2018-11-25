import { Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Directive({
  selector: '[appCreditcard]',
  host: {
      '[value]': 'appCreditcard',
      '(input)': 'format($event.target.value)'
  }
})
export class CreditcardDirective implements OnInit {

  @Input() appCreditcard: string;
  @Output() appCreditcardChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private bs: CardService) {
  }

  ngOnInit() {
      this.format(this.appCreditcard);
  }

  format(value) {
      if (value != undefined || value != null) {
        value = this.bs.creditCardFormat(value);
      }
      this.appCreditcardChange.next(value);
  }

}
