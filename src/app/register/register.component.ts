import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ValidadorService } from "../services/funcionalidad/validador.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrl: "./register.component.scss",
})
export class RegisterComponent {
    formulario: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private validadorService: ValidadorService,
        private router: Router
    ) {
        this.formulario = this.formBuilder.group({
            name: ["", [Validators.required, Validators.minLength(1)]],
            password: ["", [Validators.required, Validators.minLength(1)]],
            rppassword: ["", [Validators.required, Validators.minLength(1)]],
        });
    }

    validaContrasena() {
        let name = this.formulario.value.name;
        let password = this.formulario.value.password;
        let rppassword = this.formulario.value.rppassword;

        if (password !== rppassword ){ 
            alert("Las contraseñas no coinciden");
        }else{
            this.validadorService.agregarUsuario(name, password);
            this.router.navigate(["login"]);
            alert("Usuario registrado");
        }
    }

    
        
    
}
