import { Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  title: string; //Titulo (ej. 'Básicos')
  route: string; //Ruta (ej. 'basic')
}

//reactive.routes.ts
const reactiveItems = reactiveRoutes[0].children ?? []; //Ruta raiz [0] - nos importan los hijos (children) si no tiene hijos envia un arreglo vacio

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
})
export class SideMenu {

  // Mapeando las rutas de reactive.routes.ts
  reactiveMenu: MenuItem[] = reactiveItems
    .filter(item => item.path !== '**') //Filtramos para que no aparezca el Undefine
    .map(item => ({
      route: `reactive/${item.path}`,
      title: `${item.title}`,
    }));

  authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth'
    },
  ];

  countryMenu: MenuItem[] = [
    {
      title: 'Países',
      route: './country'
    },
  ];
}
