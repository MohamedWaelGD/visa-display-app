import { Component } from '@angular/core';
import { BackgroundChangerService } from '../services/background-changer/background-changer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  months: any[] = new Array(12).fill(0).map((_, index) => {
    return (index + 1).toString().padStart(2, '0');
  });
  years: any[] = new Array(15).fill(2023).map((e, index) => {
    return (e + index).toString();
  });
  isFocusOnCCV: boolean = false;

  cardNumber: string = '';
  cardHolders: string = '';
  monthExpiration: string = '';
  yearExpiration: string = '';
  ccv: string = '';

  MAX_CARD_NUMBER: number = 16;

  constructor(
    private _backgroundService: BackgroundChangerService
  ) {}

  checkNumberInput(event: any): boolean {
    const charCode = (event.which)?event.which:event.keyCode;
    return charCode >= 48 && charCode <= 57;
  }

  maxNumberInput(input: string, maxNumber: number = 4, removeWhiteSpaces: boolean = false): boolean {
    if (removeWhiteSpaces) {
      input = input.replace(/\s+/g, '');
    }
    return input.length < maxNumber;
  }

  onCardNumberChange() {
    let oldInput = this.cardNumber.replace(/\s+/g, '');
    this.cardNumber = '';
    let count = 0;
    for (let i = 0; i < oldInput.length; i++) {
      this.cardNumber += oldInput[i];
      count += 1;
      if (count % 4 == 0 && count != 0 && count != this.MAX_CARD_NUMBER) {
        this.cardNumber += ' ';
      }
    }
  }

  changeBackground() {
    this._backgroundService.onRequestBackgroundChange$.next(0);
  }
}
