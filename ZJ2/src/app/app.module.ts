import { NgParticlesModule } from "ng-particles";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {CountUpModule} from 'ngx-countup';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { TypedComponent } from './typed/typed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgTiltModule } from "@geometricpanda/angular-tilt";
import { register } from 'swiper/element/bundle';
register();

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    TypedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    CountUpModule,
    NgParticlesModule,
    NgTiltModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
