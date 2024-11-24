import { Injectable } from "@angular/core";
import { Task } from "../../interfaces/task";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class CrudService {
    private tareasSubject = new BehaviorSubject<Task[]>([
        {
            id: 1,
            name: "Tarea 1",
            description: "Descripción de la tarea 1",
            status: "pendiente",
            date: "2024-01-01",
        },
        {
            id: 2,
            name: "Tarea 2",
            description: "Descripción de la tarea 2",
            status: "pendiente",
            date: "2024-01-02",
        },
        {
            id: 3,
            name: "Tarea 3",
            description: "Descripción de la tarea 3",
            status: "completada",
            date: "2024-01-03",
        },
        {
            id: 4,
            name: "Tarea 4",
            description: "Descripción de la tarea 4",
            status: "pendiente",
            date: "2024-01-04",
        },
        {
            id: 5,
            name: "Tarea 5",
            description: "Descripción de la tarea 5",
            status: "completada",
            date: "2024-01-05",
        },
        {
            id: 6,
            name: "Tarea 6",
            description: "Descripción de la tarea 6",
            status: "pendiente",
            date: "2024-01-06",
        },
        {
            id: 7,
            name: "Tarea 7",
            description: "Descripción de la tarea 7",
            status: "completada",
            date: "2024-01-07",
        },
    ]);
    tareas$ = this.tareasSubject.asObservable();

    tareaSeleccionada: Task | null = null;
    mostrarPopup: boolean = false;

    constructor() {}

    getTareas(): Task[] {
        return this.tareasSubject.value;
    }

    seleccionarTarea(tarea: Task) {
        this.tareaSeleccionada = tarea;
        this.mostrarPopup = true;
    }
    cambiarEstadoTarea(id: number) {
        const tareas = this.tareasSubject.getValue();
        const tarea = tareas.find((t) => t.id === id);
        if (tarea) {
            tarea.status =
                tarea.status === "pendiente" ? "completada" : "pendiente";
            this.tareasSubject.next([...tareas]);
        }
    }
    actualizarTareas() {
        this.tareasSubject.next(
            [...this.tareasSubject.value].sort(
                (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
            )
        );
    }

    agregarTarea(tarea: Task) {
        console.log("Tarea agregada:", tarea);
        this.tareasSubject.next(
            [...this.tareasSubject.value, tarea].sort(
                (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime()
            )
        );
    }

    editarTarea(id: number, tareaActualizada: Partial<Task>) {
        const tareas = this.tareasSubject.getValue();
        const tareaIndex = tareas.findIndex((t) => t.id === id);
        if (tareaIndex !== -1) {
            tareas[tareaIndex] = { ...tareas[tareaIndex], ...tareaActualizada };
            this.tareasSubject.next([...tareas]);
        }
    }

    borrarTarea(id: number) {
        const tareas = this.tareasSubject.getValue();
        const tareasFiltradas = tareas.filter((t) => t.id !== id);
        this.tareasSubject.next(tareasFiltradas);
    }
}
