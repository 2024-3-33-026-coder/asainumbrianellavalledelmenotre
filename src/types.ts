export type Language = 'it' | 'en';

export interface PhotoItem {
  id: string;
  src: string;
  altIt: string;
  altEn: string;
  titleIt: string;
  titleEn: string;
  category: 'spaces' | 'outdoor' | 'details' | 'territory';
  aspect: 'landscape' | 'portrait';
}

export interface TerritoryDestination {
  id: string;
  name: string;
  subtitleIt: string;
  subtitleEn: string;
  distanceIt: string;
  distanceEn: string;
  descriptionIt: string;
  descriptionEn: string;
  tag: 'borgo' | 'natura' | 'cultura' | 'escursione';
  highlightIt: string;
  highlightEn: string;
}

export interface AvailabilityPeriod {
  id: string;
  titleIt: string;
  titleEn: string;
  datesIt: string;
  datesEn: string;
  statusIt: string;
  statusEn: string;
  statusType: 'available' | 'on-request' | 'open';
  notesIt: string;
  notesEn: string;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  pets: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  hasSpecialPetNeeds: boolean;
}
