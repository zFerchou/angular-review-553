import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng.module';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatchesComponent } from './componentes/matches/matches.component';
import { NewsComponent } from './componentes/news/news.component';
import { RegisterplayerComponent } from './componentes/registerplayer/registerplayer.component';
import { AdminComponent } from './componentes/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MatchesComponent,
    NewsComponent,
    RegisterplayerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule,
    MenubarModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    MessageService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
