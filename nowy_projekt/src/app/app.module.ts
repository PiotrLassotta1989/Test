import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { Hero1Component } from './hero1/hero1.component';
import { Hero2Component } from './hero2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    Hero1Component,
    Hero2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
