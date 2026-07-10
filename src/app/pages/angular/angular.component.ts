import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  features = [
    { title: 'Componentes', text: 'Interface dividida em partes reutilizáveis e independentes.' },
    { title: 'TypeScript', text: 'Código mais organizado, tipado e fácil de manter.' },
    { title: 'Router', text: 'Sistema de rotas para navegar entre páginas sem recarregar o site.' },
    { title: 'Dependency Injection', text: 'Injeção de dependência para compartilhar serviços e regras de negócio.' },
    { title: 'Formulários reativos', text: 'Criação e validação de formulários complexos.' },
    { title: 'HttpClient', text: 'Comunicação com APIs para buscar e enviar dados.' },
    { title: 'RxJS', text: 'Programação reativa com fluxos de dados assíncronos.' },
    { title: 'PWA e SSR', text: 'Suporte para aplicações instaláveis, rápidas e otimizadas.' }
  ];
}
