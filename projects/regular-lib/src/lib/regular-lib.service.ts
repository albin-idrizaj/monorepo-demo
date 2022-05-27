import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegularLibService {

  data = new BehaviorSubject<string>('default');

  constructor() { }
}
