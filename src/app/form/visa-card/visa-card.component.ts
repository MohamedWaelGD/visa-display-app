import { Component, Input, OnInit } from '@angular/core';
import { AnimateCharacter } from 'src/app/models/animate-character.model';
import { AnimateCharacterService } from 'src/app/services/animate-character/animate-character.service';
import { BackgroundChangerService } from 'src/app/services/background-changer/background-changer.service';
import { VisaCardNumbersService } from 'src/app/services/visa-card-numbers/visa-card-numbers.service';

@Component({
  selector: 'app-visa-card',
  templateUrl: './visa-card.component.html',
  styleUrls: ['./visa-card.component.scss']
})
export class VisaCardComponent implements OnInit {
  @Input() set visaCardNumberInput(cardNumber: string) {
    this.visaCardNumbers = this._visaCardService.visaCardRefactor(cardNumber, this.visaCardNumbers);
    this.setCardImage(cardNumber)
  }
  @Input() set ccvInput(ccv: string) {
    this.ccv = '';
    for (let i = 0; i < ccv.length; i++) {
      this.ccv += '*';
    }
  }
  @Input() set cardHolderNameInput(holderName: string) {
    this.visaCardNameHolder = this._animateCharService.animateCharacters(holderName, this.visaCardNameHolder, this.defaultNameHolder);
  }
  @Input() set monthInput(month: string) {
    this.monthNumbers = this._animateCharService.animateCharacters(month, this.monthNumbers, 'MM');
  }
  @Input() set yearInput(year: string) {
    this.yearNumbers = this._animateCharService.animateCharacters(year, this.yearNumbers, 'YY');
  }
  @Input() rotateInput: boolean = false;


  visaCardNumbers: AnimateCharacter[] = [];
  visaCardNameHolder: AnimateCharacter[] = [];
  monthNumbers: AnimateCharacter[] = [];
  yearNumbers: AnimateCharacter[] = [];
  ccv: string = '';
  visaImagePath: string = 'visa';
  isImageChange: boolean = false;
  intervalChangeImageId: number = 0;

  defaultNameHolder: string = 'FULL NAME';
  isBackgroundChanging: boolean = false;

  constructor(
    private _animateCharService: AnimateCharacterService,
    private _visaCardService: VisaCardNumbersService,
    private _backgroundService: BackgroundChangerService) {
    for (let i = 0; i < 16; i++) {
      this.visaCardNumbers.push({
        value: '#',
        id: '#',
        animate: false,
        animateId: -1
      });
    }
    
    for (let i = 0; i < this.defaultNameHolder.length; i++) {
      this.visaCardNameHolder.push({
        value: this.defaultNameHolder[i],
        id: this.defaultNameHolder[i],
        animate: false,
        animateId: -1
      });
    }
  }
  ngOnInit(): void {
    this._backgroundService.onBackgroundChange$.subscribe(()=>{
      this.isBackgroundChanging = true;
      setTimeout(()=>{
        this.isBackgroundChanging = false;
      }, 1000)
    });
  }

  setCardImage(cardNumber: string) {
    let oldVisaImage = this.visaImagePath;
    this.visaImagePath = this.getCardType(cardNumber);
    if (oldVisaImage != this.visaImagePath) {
      this.isImageChange = true;
      clearInterval(this.intervalChangeImageId);
      setTimeout(()=>{
        this.isImageChange = false;
      }, 300);
    }
  }

  getCardType (cardNumber: string) {
    let number = cardNumber;
    let re = new RegExp("^4");
    if (number.match(re) != null) return "visa";

    re = new RegExp("^(34|37)");
    if (number.match(re) != null) return "amex";

    re = new RegExp("^5[1-5]");
    if (number.match(re) != null) return "mastercard";

    re = new RegExp("^6011");
    if (number.match(re) != null) return "discover";
    
    re = new RegExp('^9792')
    if (number.match(re) != null) return 'troy'

    return "visa"; // default type
  }
}
