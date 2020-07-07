import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    {
      id: 'p1',
      title: 'Chennai',
      description: 'MASS ana city',
      imageUrl:
        'https://www.track2realty.track2media.com/wp-content/uploads/2019/04/Chennai-702x336.jpg',
      price: 100,
      availableFrom: new Date('2019-01-01'),
      availableTo: new Date('2019-12-31'),
      userId: 'abc',
    },
    {
      id: 'p2',
      title: 'Bangalore',
      description: 'Namma oru',
      imageUrl:
        'https://img.theculturetrip.com/1024x574/smart/wp-content/uploads/2017/12/jctp0084-central-area-bangalore-india-moore-3.jpg',
      price: 99,
      availableFrom: new Date('2019-01-01'),
      availableTo: new Date('2019-12-31'),
      userId: 'abc',
    },
    {
      id: 'p3',
      title: 'Goa',
      description: 'Party Town',
      imageUrl: 'https://images.financialexpress.com/2020/07/goa.jpg',
      price: 99,
      availableFrom: new Date('2019-01-01'),
      availableTo: new Date('2019-12-31'),
      userId: 'abc',
    },
  ]);

  get places() {
    return this._places.asObservable();
  }

  constructor(private authService: AuthService) {}

  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map((places) => {
        return {
          ...places.find((p) => p.id === id),
        };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newPlace: Place = {
      id: Math.random().toString(),
      title,
      description,
      imageUrl: 'https://images.financialexpress.com/2020/07/goa.jpg',
      price,
      availableFrom: dateFrom,
      availableTo: dateTo,
      userId: this.authService.userId,
    };
    this.places.pipe(take(1)).subscribe((places) => {
      this._places.next(places.concat(newPlace));
    });
  }
}
