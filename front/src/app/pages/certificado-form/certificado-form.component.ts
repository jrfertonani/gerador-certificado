import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';


@Component({
  selector: 'app-certificado-form',
  imports: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['Angular', 'React', 'Vue'];

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  adicionarAtividade(){
    this.atividades.push(this.atividade);
  }
}
