import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidadorService {
  public usuarios = [{name:'admin', password :'admin'}]

  constructor() { }

  validar(name : string, password : string) : boolean{

  let salir : boolean = false;
  let valido : boolean = false;
  let contador : number = 0;

  while(salir==false && contador < this.usuarios.length){
    if(this.usuarios[contador].name == name && this.usuarios[contador].password == password){
      salir = true;
      valido = true;
    }
    contador++;
    }
    return valido;
    }

    agregarUsuario(name : string, password : string){
      this.usuarios.push({name : name, password : password});
    }
  
    
}
