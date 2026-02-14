
export type Language = 'en' | 'hi';

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  benefits: string[];
  procedure: string[];
  recovery: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
