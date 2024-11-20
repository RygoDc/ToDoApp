import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TieneHeaderService {
  
  mostrarPlaneta: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  mostrar$: Observable<boolean> = this.mostrarPlaneta.asObservable();

  constructor() { }

  togglePlaneta(show : boolean){
    this.mostrarPlaneta.next(show);
  }
}
