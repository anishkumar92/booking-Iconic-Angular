export interface Booking {
  id: string;
  placeId: string;
  userId: string;
  placeTitle: string;
  placeImage: string;
  firstName: string;
  lastName: string;
  dateFrom: Date;
  dateTo: Date;
  guestNumber: number;
}
