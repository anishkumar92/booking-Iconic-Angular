import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    {
      id: "p1",
      title: "Chennai",
      description: "MASS ana city",
      imageUrl:
        "https://www.track2realty.track2media.com/wp-content/uploads/2019/04/Chennai-702x336.jpg",
      price: 100,
      availableFrom: new Date("2019-01-01"),
      availableTo: new Date("2019-12-31"),
    },
    {
      id: "p2",
      title: "Bangalore",
      description: "Namma oru",
      imageUrl:
        "https://img.theculturetrip.com/1024x574/smart/wp-content/uploads/2017/12/jctp0084-central-area-bangalore-india-moore-3.jpg",
      price: 99,
      availableFrom: new Date("2019-01-01"),
      availableTo: new Date("2019-12-31"),
    },
    {
      id: "p3",
      title: "Goa",
      description: "Party Town",
      imageUrl: "https://images.financialexpress.com/2020/07/goa.jpg",
      price: 99,
      availableFrom: new Date("2019-01-01"),
      availableTo: new Date("2019-12-31"),
    },
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return {
      ...this._places.find((p) => p.id === id),
    };
  }
}
