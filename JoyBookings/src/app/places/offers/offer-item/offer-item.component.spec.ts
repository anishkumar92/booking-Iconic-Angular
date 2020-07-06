import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferItemComponent } from './offer-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OfferItemComponent', () => {
  let component: OfferItemComponent;
  let fixture: ComponentFixture<OfferItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfferItemComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OfferItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
