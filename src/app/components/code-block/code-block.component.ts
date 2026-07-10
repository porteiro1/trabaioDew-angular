import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-block',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="code-card" [attr.aria-label]="title || 'Bloco de código'">
      <div class="code-header" *ngIf="title">{{ title }}</div>
      <pre><code>{{ code }}</code></pre>
    </div>
  `,
  styles: [`
    .code-card {
      overflow: hidden;
      border-radius: 18px;
      border: 1px solid rgba(11, 58, 29, 0.14);
      background: #0d1f18;
      box-shadow: var(--shadow-soft);
    }
    .code-header {
      padding: .75rem 1rem;
      color: #d9f8d2;
      background: rgba(255,255,255,.07);
      font-weight: 800;
      border-bottom: 1px solid rgba(255,255,255,.08);
    }
    pre {
      margin: 0;
      padding: 1rem;
      overflow-x: auto;
      color: #f0fff4;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .92rem;
      line-height: 1.55;
    }
    code { white-space: pre; }
  `]
})
export class CodeBlockComponent {
  @Input() title = '';
  @Input() code = '';
}
