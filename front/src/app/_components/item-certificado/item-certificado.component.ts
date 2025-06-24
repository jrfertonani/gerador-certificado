import { Component, Input } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent,],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {

    @Input() nomeAluno   : string ='';
    @Input() dateEmissao : string ='';
    @Input() id: number   = 0;

  constructor(private router: Router){}


  redirecionarCertificado(){
    this.router.navigate(['/certificados', this.id]);
  }

}
