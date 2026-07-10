import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block.component';

@Component({
  selector: 'app-trabalho',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  templateUrl: './trabalho.component.html',
  styleUrl: './trabalho.component.css'
})
export class TrabalhoComponent {
  checklist = [
    'Preencher o README.md com as informações do projeto.',
    'Garantir que o .gitignore está configurado para Angular.',
    'Verificar se o componente principal possui router-outlet.',
    'Criar páginas dentro da pasta pages.',
    'Criar componentes reutilizáveis dentro da pasta components.',
    'Cadastrar as rotas no arquivo app.routes.ts.',
    'Adicionar imagens e mídias em assets/public.',
    'Atualizar os caminhos dos src das imagens.',
    'Rodar localmente com ng serve.',
    'Enviar o projeto para o GitHub sem node_modules.'
  ];

  gitignoreCode = `node_modules/
dist/
.angular/
.cache/
coverage/
*.log
.env
.vscode/
.idea/
.DS_Store
Thumbs.db`;

  githubCode = `git init
git add .
git commit -m "Projeto Angular baseado na apresentação"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main`;
}
