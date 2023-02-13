import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { PackageOptions } from './class/package-options';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    HeaderComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(PackageOptions),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
