import { Routes } from '@angular/router';
import { AcessibilidadeComponent } from './pages/acessibilidade/acessibilidade.component';
import { MedidasComponent } from './pages/medidas/medidas.component';
import { ResponsividadeComponent } from './pages/responsividade/responsividade.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AnimacoesComponent } from './pages/animacoes/animacoes.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'acessibilidade' },
  { path: 'acessibilidade', component: AcessibilidadeComponent, title: 'HTML e Acessibilidade' },
  { path: 'medidas', component: MedidasComponent, title: 'Medidas Relativas' },
  { path: 'responsividade', component: ResponsividadeComponent, title: 'Responsividade' },
  { path: 'layout', component: LayoutComponent, title: 'Flexbox e Grid' },
  { path: 'animacoes', component: AnimacoesComponent, title: 'Animações CSS' },
  { path: '**', redirectTo: 'acessibilidade' }
];
