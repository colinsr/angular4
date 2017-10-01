import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { Sandbox2Component } from './components/sandbox/sandbox2.component';
import { Sandbox3Component } from './components/sandbox/sandbox3.component';
import { Sandbox4Component } from './components/sandbox4/sandbox4.component';
import { Sandbox5Component } from './components/sandbox5/sandbox5.component';


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    Sandbox2Component,
    Sandbox3Component,
    Sandbox4Component,
    Sandbox5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
