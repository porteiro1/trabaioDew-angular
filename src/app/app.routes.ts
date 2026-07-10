import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PwaComponent } from './pages/pwa/pwa.component';
import { FrameworksComponent } from './pages/frameworks/frameworks.component';
import { AngularComponent } from './pages/angular/angular.component';
import { InstalacaoComponent } from './pages/instalacao/instalacao.component';
import { EstruturaComponent } from './pages/estrutura/estrutura.component';
import { TrabalhoComponent } from './pages/trabalho/trabalho.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Aula 22 - Angular' },
  { path: 'pwa', component: PwaComponent, title: 'PWA' },
  { path: 'frameworks', component: FrameworksComponent, title: 'Frameworks JavaScript' },
  { path: 'angular', component: AngularComponent, title: 'Angular' },
  { path: 'instalacao', component: InstalacaoComponent, title: 'Instalação Angular' },
  { path: 'estrutura', component: EstruturaComponent, title: 'Estrutura Angular' },
  { path: 'trabalho', component: TrabalhoComponent, title: 'Indicações para o Trabalho' },
  { path: '**', redirectTo: '' }
];
