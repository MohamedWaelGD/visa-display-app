import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundChangerService {

  onBackgroundChange$ = new Subject();
  onRequestBackgroundChange$ = new Subject();

  constructor() { }
}
