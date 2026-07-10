import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block.component';

@Component({
  selector: 'app-estrutura',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  templateUrl: './estrutura.component.html',
  styleUrl: './estrutura.component.css'
})
export class EstruturaComponent {
  files = [
    { name: 'src/', text: 'Concentra o código-fonte do sistema.' },
    { name: 'main.ts', text: 'Ponto de entrada que inicializa o Angular.' },
    { name: 'index.html', text: 'HTML principal onde o app é carregado pela tag app-root.' },
    { name: 'styles.css', text: 'Estilos globais compartilhados por toda a aplicação.' },
    { name: 'app/', text: 'Componentes, páginas, rotas, serviços e recursos do projeto.' },
    { name: 'app.routes.ts', text: 'Define as rotas que ligam URLs às páginas.' },
    { name: 'angular.json', text: 'Configura build, assets, estilos globais e execução do projeto.' },
    { name: 'package.json', text: 'Lista scripts, dependências e informações do projeto.' },
    { name: 'tsconfig.json', text: 'Configura o compilador TypeScript.' },
    { name: 'assets/public', text: 'Imagens, ícones, fontes e arquivos estáticos.' }
  ];

  treeCode = `src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   └── code-block/
│   ├── pages/
│   │   ├── home/
│   │   ├── pwa/
│   │   ├── frameworks/
│   │   └── angular/
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/
├── index.html
├── main.ts
└── styles.css`;

  routeCode = `import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];`;
}
