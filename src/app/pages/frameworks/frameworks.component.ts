import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-frameworks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frameworks.component.html',
  styleUrl: './frameworks.component.css'
})
export class FrameworksComponent {
  benefits = [
    'Base pronta para criar aplicações',
    'Organização e padrões de arquitetura',
    'Bibliotecas e ferramentas integradas',
    'Menos código repetitivo',
    'Facilidade de manutenção em equipe',
    'Mais escalabilidade para projetos grandes'
  ];

  angularUses = ['Sistemas corporativos', 'ERPs e CRMs', 'Aplicações governamentais', 'Projetos bancários', 'Projetos de grande porte'];
  reactUses = ['Dashboards', 'Redes sociais', 'E-commerces', 'SPAs interativas', 'Interfaces com evolução rápida'];
}
