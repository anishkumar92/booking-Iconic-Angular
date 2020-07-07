import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';

import { EditOfferPage } from './edit-offer.page';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { PlacesService } from '../../places.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Place } from '../../place.model';
import { Observable } from 'rxjs';
import { of, from } from 'rxjs';

fdescribe('EditOfferPage', () => {
  let component: EditOfferPage;
  let fixture: ComponentFixture<EditOfferPage>;

  const fakeActivatedRoute = {
    provide: ActivatedRoute,
    useValue: {
      paramMap: of(
        convertToParamMap({
          id: 'p1',
          title: 'Chennai',
          description: 'MASS ana city',
          imageUrl:
            'https://www.track2realty.track2media.com/wp-content/uploads/2019/04/Chennai-702x336.jpg',
          price: 100,
          availableFrom: new Date('2019-01-01'),
          availableTo: new Date('2019-12-31'),
        })
      ),
    },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditOfferPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [fakeActivatedRoute, PlacesService, NavController],
    }).compileComponents();

    fixture = TestBed.createComponent(EditOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
