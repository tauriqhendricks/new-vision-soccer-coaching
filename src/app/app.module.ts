import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrainingComponent } from './layout/components/training/training.component';
import { InformationComponent } from './layout/components/information/information.component';
import { ContactComponent } from './layout/components/contact/contact.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { QuoteComponent } from './layout/components/quote/quote.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { NavBarSmComponent } from './layout/components/nav-bar/components/nav-bar-sm/nav-bar-sm.component';
import { NavBarLgComponent } from './layout/components/nav-bar/components/nav-bar-lg/nav-bar-lg.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    QuoteComponent,
    InformationComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    NavBarSmComponent,
    NavBarLgComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
