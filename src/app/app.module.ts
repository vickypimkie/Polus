import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { NewComponent } from './layout/new/new.component';
import { AboutComponent } from './layout/about/about.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './layout/home/home.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ReservComponent } from './layout/reserv/reserv.component';
import { GalleryComponent } from './layout/gallery/gallery.component';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reserv', component: ReservComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
 ];

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    AboutComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    GalleryComponent,
    ReservComponent
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
