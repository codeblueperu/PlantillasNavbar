import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { INavbarData } from '@interfaces/IMenuItems';
import { ISideNavToggle } from '@interfaces/ISidenavToggle';
import { navData } from '@interfaces/navData';
import { fadeInOut } from '@pipes/FadeInOut';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', keyframes([
          style({ transform: 'rotate(0deg)', offset: '0' }),
          style({ transform: 'rotate(2turn)', offset: '1' }),

        ]))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  @Output() onTouggleSideNav: EventEmitter<ISideNavToggle> = new EventEmitter();

  collapsed: boolean = false;
  screenWidth: number = 0;
  navData: INavbarData[] = navData;
  multiple: boolean = false

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth
    if (this.screenWidth <= 768) {
      this.collapsed = false
      this.onTouggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }
  }

  constructor(private route:Router){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed
    this.onTouggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  closeSidenav(): void {
    this.collapsed = false
    this.onTouggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item)
    item.expanded = !item.expanded
  }

  getActiveClass(data:INavbarData):string{
    return this.route.url.includes(data.routerLink) ? 'active' : ''
  }

  shrinkItems(item: INavbarData):void{
    if (!this.multiple) {
      for (let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false
        }
      }
    }
  }

}
