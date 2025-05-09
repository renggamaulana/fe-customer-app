export interface Customer {
    _id: string;
    number: number;
    location: string;
    date: string; 
    loginHour: string;
    name: string;
    age: number;
    gender: 'Male' | 'Female' | string;
    email: string;
    noTelp: string;
    brandDevice: string;
    digitalInterest: string;
    locationType: 'urban' | 'rural' | string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  