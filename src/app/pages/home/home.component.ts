import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    {
      icon: '📱',
      title: 'PWA',
      text: 'Aplicações web que podem ser instaladas, funcionar offline e entregar experiência semelhante a apps nativos.',
      link: '/pwa'
    },
    {
      icon: '🧩',
      title: 'Frameworks',
      text: 'Estruturas prontas que organizam o desenvolvimento, reduzem erros e ajudam na manutenção do projeto.',
      link: '/frameworks'
    },
    {
      icon: '🅰️',
      title: 'Angular',
      text: 'Framework mantido pelo Google para SPAs e sistemas corporativos com componentes, rotas e TypeScript.',
      link: '/angular'
    },
    {
      icon: '⚙️',
      title: 'Instalação',
      text: 'Node.js, npm, Angular CLI, criação do projeto e execução local com ng serve.',
      link: '/instalacao'
    }
  ];
}
