export interface Customer {
    _id: string;
    number: number;
    location: string;
    date: string; // ISO string format
    loginHour: string; // format seperti "16:07"
    name: string;
    age: number;
    gender: 'Male' | 'Female' | string;
    email: string;
    noTelp: string;
    brandDevice: string;
    digitalInterest: string;
    locationType: 'urban' | 'rural' | string;
    createdAt: string; // ISO date string
    updatedAt: string;
    __v: number;
  }
  