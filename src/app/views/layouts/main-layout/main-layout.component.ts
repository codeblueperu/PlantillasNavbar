import { Component } from '@angular/core';
import { ISideNavToggle } from '@interfaces/ISidenavToggle';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  isSideNavCollapsed: boolean = true
  screenWidth: number = 0;

  onTouggleSideNav(event: ISideNavToggle) {
    this.isSideNavCollapsed = event.collapsed
    this.screenWidth = event.screenWidth
  }
}
