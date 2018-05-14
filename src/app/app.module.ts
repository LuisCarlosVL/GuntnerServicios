import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http'
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginnComponent } from './components/loginn/loginn.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import{  RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConservicesComponent } from './components/conservices/conservices.component';
import { ConsalesComponent } from './components/consales/consales.component';
import { ImagelogginComponent } from './components/imageloggin/imageloggin.component';
import { GeneralHeaderComponent } from './components/general-header/general-header.component';
import { UnitsComponent } from './components/units/units.component';
import { NumunitsComponent } from './components/numunits/numunits.component';
import { PagevaluesComponent } from './components/pagevalues/pagevalues.component';
import { ValuesComponent } from './components/values/values.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginService} from './services/login.service';
import {SystemsService} from './services/systems.service';
import {UnitService} from './services/unit.service';
import {ValuesService} from './services/values.service';
import { Values2Component } from './components/values2/values2.component';
import { Pagevalues2Component } from './components/pagevalues2/pagevalues2.component';
import {WritteService} from './services/writte.service';
import {AuthGuardService as AuthGuard} from './services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginnComponent
  },
  { 
     path: 'inicio',
     canActivate: [AuthGuard],
    component: InicioComponent
},
    {
      path: 'Service',
      component: ConservicesComponent
    },
    {
      path: 'Sales',
      component: ConsalesComponent
    },
   { path: 'Units',
    component: UnitsComponent
  },
  {
    path: 'Values',
    component: PagevaluesComponent
  },
  {
    path: 'Values2',
    component: Pagevalues2Component
  }
] 

@NgModule({
  declarations: [
    AppComponent,
    LoginnComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactComponent,
    ConservicesComponent,
    ConsalesComponent,
    ImagelogginComponent,
    GeneralHeaderComponent,
    UnitsComponent,
    NumunitsComponent,
    PagevaluesComponent,
    ValuesComponent,
    Values2Component,
    Pagevalues2Component,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule  
  ],
  providers: [LoginService, SystemsService, UnitService, ValuesService, WritteService, AuthGuard],
  bootstrap: [AppComponent],

})
export class AppModule { }
