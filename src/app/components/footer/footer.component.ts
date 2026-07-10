import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p><strong>Desenvolvimento Web</strong> · Aula 22: PWA, Frameworks e criação de um projeto Angular</p>
      <p>Projeto Angular refeito com rotas, componentes, responsividade e checklist de entrega.</p>
    </footer>
  `,
  styles: [`
    .footer {
      width: min(1180px, calc(100% - 2rem));
      margin: 2rem auto 0;
      padding: 2rem 0 2.8rem;
      color: var(--muted);
      border-top: 1px solid rgba(36, 78, 33, 0.12);
      text-align: center;
    }
    .footer p { margin: .35rem 0; }
  `]
})
export class FooterComponent {}
