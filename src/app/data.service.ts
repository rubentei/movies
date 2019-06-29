import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public name:string = 'Rubén';
  public lastname:string = 'Menéndez';
  
  constructor() { }
}
