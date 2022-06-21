export interface NameValue {
  name: string;
  value: string | number;
}

export interface Country {
  name: string;
  code: string;
}

export interface Language {
  name: string;
  code: string;
  nativeName: string;
}

export interface ErrorMessage {
  code?: string;
  message: string;
}

export interface BaseApiResponse<T> {
  data?: T;
  error?: ErrorMessage;
}

export interface ObjectMapper<T> {
  [key: string]: T;
}
