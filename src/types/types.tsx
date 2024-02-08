export interface studentType {
  id: string | number;
  name: string;
  gender: string;
  age: string;
  class: number;
}

export interface formErrorsType {
  [name: string]: string;
}
