import { Component, OnInit } from '@angular/core';
import { BackgroundChangerService } from 'src/app/services/background-changer/background-changer.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  backgroundImagePath: string = `/assets/images/bgs/bg1.jpg`;

  backgroundImages = [
    'bg1', 
    'bg2', 
    'bg3', 
    'bg4', 
    'bg5'
  ];
  currentIndex: number = 0;
  isCanChangeBackground: boolean = true;

  constructor(
    private _backgroundService: BackgroundChangerService
  ) {}

  ngOnInit(): void {
    this.selectRandomBackground();
    this._backgroundService.onRequestBackgroundChange$.subscribe(()=>{
      if (this.isCanChangeBackground) {
        this.setDurationToChangeBackground();
      }
    })
  }

  setDurationToChangeBackground() {
    this.isCanChangeBackground = false;
    this._backgroundService.onBackgroundChange$.next(0);
    setTimeout(()=>{
      this.selectRandomBackground();
    }, 600)
    setTimeout(()=>{
      this.isCanChangeBackground = true
    }, 1050)
  }
  
  selectRandomBackground() {
    let randomIndex = Math.floor((Math.random() * this.backgroundImages.length));
    while (randomIndex == this.currentIndex && this.backgroundImages.length > 1) {
      randomIndex = Math.floor((Math.random() * this.backgroundImages.length));
    }
    this.currentIndex = randomIndex;
    this.backgroundImagePath = `/assets/images/bgs/${this.backgroundImages[randomIndex]}.jpg`;
  }
}
