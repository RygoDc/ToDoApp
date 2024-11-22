import { Injectable } from "@angular/core";
import { Task } from "../../interfaces/task";

@Injectable({
    providedIn: "root",
})
export class CrudService {
    private tareas: Task[] = [
        { id: 1, name: "Tarea 1", description: "Descripción de la tarea 1", status: "pendiente", date: "2024-01-01" },
        { id: 2, name: "Tarea 2", description: "Descripción de la tarea 2", status: "pendiente", date: "2024-01-02" },
        { id: 3, name: "Tarea 3", description: "Descripción de la tarea 3", status: "completada", date: "2024-01-03" },
        { id: 4, name: "Tarea 4", description: "Descripción de la tarea 4", status: "pendiente", date: "2024-01-04" },
        { id: 5, name: "Tarea 5", description: "Descripción de la tarea 5", status: "completada", date: "2024-01-05" },
        { id: 6, name: "Tarea 6", description: "Descripción de la tarea 6", status: "pendiente", date: "2024-01-06" },
        { id: 7, name: "Tarea 7", description: "Descripción de la tarea 7", status: "completada", date: "2024-01-07" },
    ];

    getTareas(): Task[] {
        return this.tareas;
    }
    
    tareaSeleccionada: any = null;    

    constructor() { }

    agregarTarea(tarea: Task) {
      console.log("Tarea agregada:", tarea);  
      this.tareas.push(tarea); // Agrega la nueva tarea al arreglo
      }

    seleccionarTarea(tarea: any) {
      this.tareaSeleccionada = tarea;
    }
    
    editarTarea(id: number, tareaActualizada: Partial<Task>) {
      const tareaIndex = this.tareas.findIndex(t => t.id === id);
      if (tareaIndex !== -1) {
        this.tareas[tareaIndex] = { ...this.tareas[tareaIndex], ...tareaActualizada };
      }
    }

    // moverTareaACompletadas(tarea: any) {
    //   // Elimina de pendientes y agrega a completadas
    //   this.tareasPendientes = this.tareasPendientes.filter(t => t !== tarea);
    //   tarea.status = 'completada';
    //   this.tareasCompletadas.push(tarea);
    // }
  
    // moverTareaAPendientes(tarea: any) {
    //   // Elimina de completadas y agrega a pendientes
    //   this.tareasCompletadas = this.tareasCompletadas.filter(t => t !== tarea);
    //   tarea.status = 'pendiente';
    //   this.tareasPendientes.push(tarea);
    // }
  
    borrarTarea(id: number) {
      this.tareas = this.tareas.filter((t) => t.id !== id);
      
    }
}
