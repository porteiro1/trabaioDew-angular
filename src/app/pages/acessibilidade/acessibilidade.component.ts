import { Component } from '@angular/core';

@Component({
  selector: 'app-acessibilidade',
  standalone: true,
  templateUrl: './acessibilidade.component.html',
  styleUrl: './acessibilidade.component.css'
})
export class AcessibilidadeComponent {
  limpar(nome: HTMLInputElement, email: HTMLInputElement): void {
    nome.value = '';
    email.value = '';
    nome.focus();
  }
}
