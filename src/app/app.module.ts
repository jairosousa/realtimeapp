import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FirebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

import { AppComponent } from './app.component';
import { CadastroPessoaModule } from './cadastro-pessoa/cadastro-pessoa.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CadastroPessoaModule, 
    AngularFireModule.initializeApp(FirebaseConfig)
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
