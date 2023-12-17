import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './views/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './views/layouts/auth-layout/auth-layout.component';
import { SidebarComponent } from './views/layouts/sidebar/sidebar.component';
import { SubMenuComponent } from './views/layouts/sub-menu/sub-menu.component';
import { ContentComponent } from './views/layouts/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent,
    SubMenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
