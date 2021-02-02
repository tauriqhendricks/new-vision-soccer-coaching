import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  isMenuExpaned = true;

  constructor() { }

  setIsMenuExpanded(value: boolean): void {
    this.isMenuExpaned = value;
  }

  getIsMenuExpanded(): boolean {
    return this.isMenuExpaned;
  }

  // get(): Observable[boolean] {

  // }

}
