import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivaFooterService {

  administraFooter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  adminFot$: Observable<boolean> = this.administraFooter.asObservable()
  
  constructor() { }

  toggleFooter(show : boolean){
    this.administraFooter.next(show);
  }
}
