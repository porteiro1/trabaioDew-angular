import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block.component';

@Component({
  selector: 'app-instalacao',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  templateUrl: './instalacao.component.html',
  styleUrl: './instalacao.component.css'
})
export class InstalacaoComponent {
  setupSteps = [
    'Instalar a versão LTS do Node.js.',
    'Verificar node e npm pelo terminal.',
    'Instalar o Angular CLI globalmente.',
    'Criar um projeto com ng new.',
    'Entrar na pasta e rodar com ng serve.'
  ];

  verifyCode = `node -v
npm -v`;

  cliCode = `npm install -g @angular/cli
ng version`;

  projectCode = `ng new nome-do-projeto
cd nome-do-projeto
ng serve --open`;

  componentCode = `ng generate component components/header
ng generate component pages/home
ng generate service services/produtos`;
}
