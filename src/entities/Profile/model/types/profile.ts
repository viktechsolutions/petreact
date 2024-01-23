import { Country, Currency } from 'shared/const/common';

export interface Profile {
  id: string;
  name: string;
  surname: string;
  username: string;
  age: number;
  city: string;
  country: Country.RUS;
  currency: Currency.RUB;
  description: string;
  avatar: string;
}

export interface ProfileSchema {
  data?: Profile;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
}