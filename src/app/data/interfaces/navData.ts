import { INavbarData } from "./IMenuItems";

export const navData: INavbarData[] = [
  {
    routerLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routerLink: 'reservas',
    icon: 'fal fa-users',
    label: 'Reservas',
    items:[
      {
        routerLink:'reserva/search',
        label:'Buscar'
      },
      {
        routerLink:'reserva/nuevo',
        label:'Nuevo'
      },
      {
        routerLink:'reserva/search',
        label:'Buscar'
      },
      {
        routerLink:'reserva/nuevo',
        label:'Nuevo'
      },
      {
        routerLink:'reserva/search',
        label:'Buscar'
      },
      {
        routerLink:'reserva/nuevo',
        label:'Nuevo'
      },
      {
        routerLink:'reserva/search',
        label:'Buscar'
      },
      {
        routerLink:'reserva/nuevo',
        label:'Nuevo'
      },
      {
        routerLink:'reserva/search',
        label:'Buscar'
      },
      {
        routerLink:'reserva/nuevo',
        label:'Nuevo'
      }
    ]
  },
  {
    routerLink: 'soporte',
    icon: 'fal fa-user',
    label: 'Soporte',
    items:[
      {
        routerLink:'soporte/help',
        label:'Ayuda'
      },
      {
        routerLink:'reserva/faq',
        label:'Faq'
      }
    ]
  },
]
