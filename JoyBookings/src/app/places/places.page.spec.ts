import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlacesPage', () => {
  let component: PlacesPage;
  let fixture: ComponentFixture<PlacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlacesPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PlacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
