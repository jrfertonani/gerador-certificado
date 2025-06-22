import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../_components/secondary-button/secondary-button.component";
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, FormsModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

  nome: string = '';
  atividade: string = '';
  atividades: string [] = ['Angular','Java', 'sql'];


campoInvalido(control: NgModel){
  return control.invalid && control.touched
}

}
