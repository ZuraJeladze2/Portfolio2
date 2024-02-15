import { NgParticlesModule } from "ng-particles";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import {CountUpModule} from 'ngx-countup';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    CountUpModule,
    NgParticlesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
