import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { Sandbox2Component } from './components/sandbox/sandbox2.component';
import { Sandbox3Component } from './components/sandbox/sandbox3.component';
import { Sandbox4Component } from './components/sandbox4/sandbox4.component';
import { Sandbox5Component } from './components/sandbox5/sandbox5.component';
import { Sandbox6Component } from './components/sandbox6/sandbox6.component';
import { Sandbox7Component } from './components/sandbox7/sandbox7.component';
import { Sandbox8Component } from './components/sandbox8/sandbox8.component';
import { Sandbox9Component } from './components/sandbox9/sandbox9.component';
import { Sandbox10Component } from './components/sandbox10/sandbox10.component';
import { Sandbox11Component } from './components/sandbox11/sandbox11.component';
import { Sandbox12Component } from './components/sandbox12/sandbox12.component';
import { Sandbox13Component } from './components/sandbox13/sandbox13.component';
import { Sandbox14Component } from './components/sandbox14/sandbox14.component';
import { DataService }        from './services/data.service';
import { DataservicesandboxComponent } from './components/dataservicesandbox/dataservicesandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    Sandbox2Component,
    Sandbox3Component,
    Sandbox4Component,
    Sandbox5Component,
    Sandbox6Component,
    Sandbox7Component,
    Sandbox8Component,
    Sandbox9Component,
    Sandbox10Component,
    Sandbox11Component,
    Sandbox12Component,
    Sandbox13Component,
    Sandbox14Component,
    DataservicesandboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
