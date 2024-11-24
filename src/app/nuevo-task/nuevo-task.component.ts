import { Component } from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { CrudService } from "../services/funcionalidad/crud.service";
import { Task } from "../interfaces/task";

@Component({
    selector: "app-nuevo-task",
    templateUrl: "./nuevo-task.component.html",
    styleUrl: "./nuevo-task.component.scss",
})
export class NuevoTaskComponent {
    formulario: FormGroup;

    nuevaTarea: Task = {
        id: 0,
        date: "",
        name: "",
        description: "",
        status: "pendiente",
    };
    constructor(private crudService: CrudService, private router: Router) {
        this.formulario = new FormGroup({
            name: new FormControl("", [
                Validators.required,
                Validators.minLength(1),
            ]),
            description: new FormControl("", [
                Validators.required,
                Validators.minLength(1),
            ]),
            date: new FormControl("", [
                Validators.required,
                Validators.minLength(1),
            ]),
        });
    }

    agregarTarea() {
        this.nuevaTarea.name = this.formulario.get("name")?.value;
        this.nuevaTarea.description = this.formulario.get("description")?.value;
        this.nuevaTarea.date = this.formulario.get("date")?.value;
        this.nuevaTarea.id = Date.now();

        this.crudService.agregarTarea(this.nuevaTarea);

        alert("Tarea agregada");

        this.formulario.reset({
            name: "",
            description: "",
            date: "",
            status: "pendiente",
        });

        this.router.navigate(["app/main"]);
    }

    volver() {
        this.router.navigate(["app/main"]);
    }
}
