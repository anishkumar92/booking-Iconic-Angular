import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewOfferPage } from './new-offer.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewOfferPage', () => {
  let component: NewOfferPage;
  let fixture: ComponentFixture<NewOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewOfferPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(NewOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
