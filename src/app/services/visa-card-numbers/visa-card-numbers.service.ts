import { Injectable } from '@angular/core';
import { AnimateCharacterService } from '../animate-character/animate-character.service';
import { AnimateCharacter } from 'src/app/models/animate-character.model';

@Injectable({
  providedIn: 'root'
})
export class VisaCardNumbersService {

  constructor(private _animateService: AnimateCharacterService) { }

  visaCardRefactor(value: string, visaCardNumbers: AnimateCharacter[]) : AnimateCharacter[] {
    value = this.removeSpaces(value);
    visaCardNumbers = this.setNumbersInCard(value, visaCardNumbers);
    visaCardNumbers = this.setRemainingEmptyCardNumbers(value, visaCardNumbers);
    return visaCardNumbers;
  }

  private setNumbersInCard(value: string, visaCardNumbers: AnimateCharacter[]) : AnimateCharacter[] {
    for (let i = 0; i < value.length && i < visaCardNumbers.length; i++) {
      visaCardNumbers[i] = this._animateService.checkAndAnimateCharacter(visaCardNumbers[i], visaCardNumbers[i].id != value[i]);
      visaCardNumbers[i].id = value[i];
      if (i < 4 || i > visaCardNumbers.length - 5) {
        visaCardNumbers[i].value = value[i];
      }
      else {
        visaCardNumbers[i].value = '*';
      }
    }
    return visaCardNumbers;
  }

  private setRemainingEmptyCardNumbers(value: string, visaCardNumbers: AnimateCharacter[]) : AnimateCharacter[] {
    for (let i = value.length; i < visaCardNumbers.length; i++) {
      visaCardNumbers[i] = this._animateService.checkAndAnimateCharacter(visaCardNumbers[i], visaCardNumbers[i].id != '#');
      visaCardNumbers[i].id = '#';
      visaCardNumbers[i].value = '#';
    }
    return visaCardNumbers;
  }

  private removeSpaces(value: string) {
    return value.replace(/\s+/g, '');
  }
}
