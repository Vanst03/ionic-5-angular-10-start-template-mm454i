import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  mostrarClinico() {
    window
      .open(
        'https://www.google.com/maps/search/?api=1&query=Clinico+geral',
        'blank'
      )
      .focus();
  }

  mostrarOncologista() {
    window
      .open(
        'https://www.google.com/maps/search/?api=1&query=Oncologista',
        'blank'
      )
      .focus();
  }

  mostrarPediatra() {
    window
      .open('https://www.google.com/maps/search/?api=1&query=Pediatra', 'blank')
      .focus();
  }
}
