import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarData } from '@interfaces/IMenuItems';
import { fadeInOut } from '@pipes/FadeInOut';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css'],
  animations: [
    fadeInOut,
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [
        style({ overflow: 'hidden' }),
        animate('{{transitionParams}}')
      ]),
      transition('void => *', animate(0))
    ])
  ]
})
export class SubMenuComponent {

  @Input() data: INavbarData = { routerLink: '', label: '', icon: '', items: [] }
  @Input() collapsed: boolean = false
  @Input() animating: boolean | undefined
  @Input() expanded: boolean | undefined
  @Input() multiple: boolean = false

  constructor(private route:Router){}

  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false
          }
        }
      }
    }

    item.expanded = !item.expanded
  }

  getActiveClass(data:INavbarData):string{
    return data.expanded && this.route.url.includes(data.routerLink) ? 'active-sublevel' : ''
  }
}
