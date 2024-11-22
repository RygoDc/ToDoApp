import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class CrudService {
    tareasPendientes = [
        {
            name: "tarea 1",
            description: "descripcion",
            status: "pendiente",
            date: "2023-06-01",
        },
        {
            name: "tarea 2",
            description: "descripcion",
            status: "pendiente",
            date: "2023-06-01",
        },
        {
            name: "tarea 3",
            description: "descripcion",
            status: "pendiente",
            date: "2023-06-01",
        },
    ];

    tareasCompletadas = [
        {
            name: "tarea 1",
            description: "descripcion",
            status: "completada",
            date: "2023-06-01",
        },
        {
            name: "tarea 2",
            description: "descripcion",
            status: "completada",
            date: "2023-06-01",
        },
        {
            name: "tarea 3",
            description: "descripcion",
            status: "completada",
            date: "2023-06-01",
        },
        {
            name: "tarea 4",
            description: "descripcion",
            status: "completada",
            date: "2023-06-01",
        },
    ];

    tareaSeleccionada: any = null;    

    constructor() { console.log('Inicializando servicio');
      this.agregarTarea({
        name: 'Tarea de prueba',
        description: 'Descripción de prueba',
        status: 'pendiente',
        date: '2024-01-01'
      });
      console.log(this.tareasPendientes);}

    agregarTarea(nuevaTarea: any) {
      console.log("Tarea agregada:", nuevaTarea);  
      this.tareasPendientes.push(nuevaTarea); // Agrega la nueva tarea al arreglo
        console.log("Tarea agregada:", nuevaTarea); // Debug para confirmar que se agrega
        console.log("Estado actual del arreglo:", this.tareasPendientes); // Verifica el arreglo actualizado
    }
    seleccionarTarea(tarea: any) {
      this.tareaSeleccionada = tarea;
    }
  
    moverTareaACompletadas(tarea: any) {
      // Elimina de pendientes y agrega a completadas
      this.tareasPendientes = this.tareasPendientes.filter(t => t !== tarea);
      tarea.status = 'completada';
      this.tareasCompletadas.push(tarea);
    }
  
    moverTareaAPendientes(tarea: any) {
      // Elimina de completadas y agrega a pendientes
      this.tareasCompletadas = this.tareasCompletadas.filter(t => t !== tarea);
      tarea.status = 'pendiente';
      this.tareasPendientes.push(tarea);
    }
  
    borrarTarea(tarea: any, esPendiente: boolean) {
      if (esPendiente) {
        this.tareasPendientes = this.tareasPendientes.filter(t => t !== tarea);
      } else {
        this.tareasCompletadas = this.tareasCompletadas.filter(t => t !== tarea);
      }
    }
}
