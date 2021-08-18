import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ReunioesListComponent } from './components/reunioes/reunioes-list/reunioes-list.component';
import { ReunioesCreateComponent } from './components/reunioes/reunioes-create/reunioes-create.component';
import { ReunioesDetailsComponent } from './components/reunioes/reunioes-details/reunioes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ReunioesListComponent,
    ReunioesCreateComponent,
    ReunioesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
