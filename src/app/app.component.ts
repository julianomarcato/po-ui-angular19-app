import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { PoModule, PoMenuItem,   PoMenuModule,   PoPageModule,   PoToolbarModule, } from '@po-ui/ng-components';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    ProtheusLibCoreModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //Ao carregar a página
  constructor(private proAppConfigService: ProAppConfigService, private router: Router) {
   
    if (! this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
      sessionStorage.setItem("insideProtheus", "0");
      sessionStorage.setItem("ERPTOKEN", '{    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3NjI2Mzc3MjksInVzZXJpZCI6IjAwMDAwMCIsImV4cCI6MTc2MjY0MTMyOSwiZW52SWQiOiJQcm90aGV1c18xMjEyNCJ9.lqJJxdyfWtMyCY8Vjbz42Mo9gJnB-2DxWWASyrgXPOfKHspQDFdgsGvpn4ItJBzggRyfJ2akp0bz1mPTU6IM8ujiB2r3X2_H_IvFnaYtD2rs-sFB0yynBWNQdLl8yDb6VavcY_zky_DLdDi9lZ9t7XRYhH_BV2lNXb3pF12sp9mYpBOuFNuFU2LWnWqmZOv-4GdKhFydVrOqfEBnuGq0N9Tr8gEJ3ZUq3pItB5px2vjb554YZ_bqXV8-htzxdpNdU_txVdzc3EV0ooiZ8Et_qsiZxal8QwN1NiQ_db55CXnO6rwDDhEMeHJCss0s6ghwbc2H0oncSv3fEyZvCONMzQ",');
    }
    else {
      sessionStorage.setItem("insideProtheus", "1");
    }
    
  }  

   //As opções
  readonly menus: Array<PoMenuItem> = [
    { label: 'Visualizar',        action: this.viewClick.bind(this),   icon: 'po-icon-clipboard', shortLabel: 'Visualizar' },
    { label: 'Ajuda (Help)',      action: this.aboutClick.bind(this),  icon: 'po-icon-help',      shortLabel: 'Ajuda' },
    { label: 'Sair',              action: this.closeApp.bind(this),    icon: 'po-icon-exit',      shortLabel: 'Sair' }
  ];

  //Visualizar
  private viewClick() {
    this.router.navigate(['/', 'view']);
  }

  //Sobre
  private aboutClick() {
    this.router.navigate(['/', 'about']);
  }

    //Home
  private homeClick() {
    this.router.navigate(['/', 'home']);
  }

  irParaAuditorias() {
    this.router.navigate(['/auditorias']);
  }

  irParaAgenda() {
    this.router.navigate(['/agenda']);
  }

  //Sair
  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert("Clique não veio do Protheus");
    }
  }
}