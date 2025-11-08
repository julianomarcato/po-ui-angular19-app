import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoModule  } from '@po-ui/ng-components';;

@Component({
  selector: 'app-about',
  imports: [
    PoModule  
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

constructor(private router: Router) {}

  irParaAuditorias() {
    this.router.navigate(['/auditorias']);
  }

  irParaAgenda() {
    this.router.navigate(['/agenda']);
  }

}
