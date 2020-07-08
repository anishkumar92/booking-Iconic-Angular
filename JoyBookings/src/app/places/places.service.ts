import { Injectable } from '@angular/core';
import { Place, PlaceData } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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
      userId: '112',
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

  constructor(private authService: AuthService, private http: HttpClient) {}

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

  fetchPlaces() {
    return this.http
      .get<{ [key: string]: PlaceData }>(
        'https://ionic-angular-bookings-ce2aa.firebaseio.com/offered-places.json'
      )
      .pipe(
        map((resData) => {
          const places = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              const place: Place = {
                id: key,
                title: resData[key].title,
                description: resData[key].description,
                imageUrl: resData[key].imageUrl,
                price: resData[key].price,
                availableFrom: new Date(resData[key].availableFrom),
                availableTo: new Date(resData[key].availableTo),
                userId: resData[key].userId,
              };
              places.push(place);
            }
          }
          return places;
          // return [];
        }),
        tap((places) => {
          this._places.next(places);
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
    let generatedId: string;
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
    return this.http
      .post<{ name: string }>(
        'https://ionic-angular-bookings-ce2aa.firebaseio.com/offered-places.json',
        { ...newPlace, id: null }
      )
      .pipe(
        switchMap((resData) => {
          generatedId = resData.name;
          return this.places;
        }),
        take(1),
        tap((places) => {
          newPlace.id = generatedId;
          this._places.next(places.concat(newPlace));
        })
      );
    //   delay(1000),
    //   tap((places) => {
    //     this._places.next(places.concat(newPlace));
    //   })
    // );
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap((places) => {
        const updatedPlaceIndex = places.findIndex((pl) => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        const place: Place = {
          id: oldPlace.id,
          title,
          description,
          imageUrl: oldPlace.imageUrl,
          price: oldPlace.price,
          availableFrom: oldPlace.availableFrom,
          availableTo: oldPlace.availableTo,
          userId: oldPlace.userId,
        };
        updatedPlaces[updatedPlaceIndex] = place;

        this._places.next(updatedPlaces);
      })
    );
  }
}
