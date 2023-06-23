import { Injectable } from '@angular/core';
import { AnimateCharacter } from 'src/app/models/animate-character.model';

@Injectable({
  providedIn: 'root'
})
export class AnimateCharacterService {

  constructor() { }

  checkAndAnimateCharacter(targetValue: AnimateCharacter, checkValue: boolean): AnimateCharacter {
    if (checkValue) {
      targetValue.animate = true;
      clearTimeout(targetValue.animateId);
      setTimeout(() => {
        if (targetValue) {
          targetValue.animate = false;
        }
      }, 300);
    }
    
    return targetValue;
  }

  animateCharacters(targetValue: string, animatedCharacters: AnimateCharacter[], defaultValue: string = '') : AnimateCharacter[] {
    if (targetValue && targetValue.length > 0) {
      animatedCharacters = this.setCharactersAndAnimate(targetValue, animatedCharacters);
    } else {
      animatedCharacters = this.setCharactersAndAnimate(defaultValue, animatedCharacters);
    }
    return animatedCharacters;
  }

  private setCharactersAndAnimate(targetValue: string, animatedCharacters: AnimateCharacter[]) : AnimateCharacter[] {
    animatedCharacters = animatedCharacters.slice(0, targetValue.length);
    animatedCharacters = this.fillRemainingCharacters(targetValue, animatedCharacters);
    for (let i = 0; i < targetValue.length; i++) {
      animatedCharacters[i] = this.checkAndAnimateCharacter(animatedCharacters[i], animatedCharacters[i].id != targetValue[i]);
      animatedCharacters[i].id = targetValue[i];
      animatedCharacters[i].value = targetValue[i];
    }

    return animatedCharacters;
  }

  private fillRemainingCharacters(targetValue: string, animatedCharacters: AnimateCharacter[]) : AnimateCharacter[] {
    let remainingSpaces = targetValue.length - animatedCharacters.length
    for (let i = 0; i < remainingSpaces; i++) {
      animatedCharacters.push({
        value: '',
        id: '',
        animate: false,
        animateId: -1
      });
    }
    return animatedCharacters;
  }

  private removeSpaces(value: string) {
    return value.replace(/\s+/g, '');
  }
}
