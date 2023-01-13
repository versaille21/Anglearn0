import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({

  // all the components and pipes will be declared in the declarations array !
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],

  // all the modules will be declared in the imports array !
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // all the services will be declaed in the providers array
  providers: [],

  // only only one main component will be declarted here
  bootstrap: [AppComponent]
})


export class AppModule { }
