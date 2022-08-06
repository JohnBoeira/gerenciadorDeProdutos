import { Component } from "@angular/core";

@Component({
  selector: 'gp-root',
  template: `
  <div>
    <h1>{{pageTitle}}</h1>
    <gp-products></gp-products>
  </div>
  `
})

export class AppComponent{
  pageTitle: string = 'Gerenciador de produtos'
}