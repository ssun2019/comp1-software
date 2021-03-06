import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationButtonComponent } from './components/navigation-bar/navigation-button/navigation-button.component';
import { LogoBarComponent } from './components/logo-bar/logo-bar.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NavigationPageComponent } from './pages/navigation-page/navigation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    NavigationButtonComponent,
    LogoBarComponent,
    DashboardPageComponent,
    NavigationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
