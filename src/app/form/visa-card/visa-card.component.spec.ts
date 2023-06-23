import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaCardComponent } from './visa-card.component';

describe('VisaCardComponent', () => {
  let component: VisaCardComponent;
  let fixture: ComponentFixture<VisaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisaCardComponent]
    });
    fixture = TestBed.createComponent(VisaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
