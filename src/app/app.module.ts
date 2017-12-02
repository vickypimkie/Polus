import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NewComponent } from './layout/new/new.component';
import { AboutComponent } from './layout/about/about.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';
import { BasketComponent } from './layout/basket/basket.component';
import { ContactComponent } from './layout/contact/contact.component';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'new', component: NewComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundPageComponent },

 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
    NotFoundPageComponent,
    BasketComponent,
    ContactComponent,
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
