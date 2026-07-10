import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pwa.component.html',
  styleUrl: './pwa.component.css'
})
export class PwaComponent implements OnInit, OnDestroy {
  isOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  canInstall = false;
  private deferredPrompt: any = null;

  resources = [
    { title: 'Instalação pelo navegador', text: 'O usuário pode instalar o app sem passar por uma loja de aplicativos.' },
    { title: 'Funcionamento offline', text: 'Arquivos e dados podem ser mantidos em cache para uso com conexão limitada.' },
    { title: 'Experiência de app', text: 'Pode abrir em tela cheia e parecer com uma aplicação nativa.' },
    { title: 'Atualizações automáticas', text: 'A nova versão chega pelo próprio navegador, sem publicação em lojas.' },
    { title: 'Push notifications', text: 'Pode enviar notificações quando configurado com suporte do navegador.' },
    { title: 'Menor custo', text: 'Uma única base web pode atender desktop, celular e tablet.' }
  ];

  comparisons = [
    {
      name: 'Aplicação Web',
      host: 'Navegador web',
      performance: 'Boa, mas depende bastante da internet e do navegador.',
      network: 'Maior consumo, com acessos frequentes ao servidor.',
      install: 'Não precisa instalar: basta acessar a URL.'
    },
    {
      name: 'PWA',
      host: 'Navegador com suporte a PWA',
      performance: 'Alta, pois pode usar cache local.',
      network: 'Consumo médio, com cache e sincronização.',
      install: 'Instalação opcional pelo navegador.'
    },
    {
      name: 'Aplicativo Nativo',
      host: 'Sistema operacional do dispositivo',
      performance: 'Muito alta, executada diretamente no sistema.',
      network: 'Baixo consumo, usando rede principalmente para dados.',
      install: 'Instalação por loja de apps ou pacote instalador.'
    }
  ];

  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
    window.addEventListener('beforeinstallprompt', this.captureInstallPrompt as EventListener);
  }

  ngOnDestroy(): void {
    if (typeof window === 'undefined') return;
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
    window.removeEventListener('beforeinstallprompt', this.captureInstallPrompt as EventListener);
  }

  async installPwa(): Promise<void> {
    if (!this.deferredPrompt) return;
    this.deferredPrompt.prompt();
    await this.deferredPrompt.userChoice;
    this.deferredPrompt = null;
    this.canInstall = false;
  }

  private updateOnlineStatus = (): void => {
    this.isOnline = navigator.onLine;
  };

  private captureInstallPrompt = (event: Event): void => {
    event.preventDefault();
    this.deferredPrompt = event;
    this.canInstall = true;
  };
}
