import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroComponent } from './layout/components/hero/hero.component';
import { TrainingComponent } from './layout/components/training/training.component';
import { InformationComponent } from './layout/components/information/information.component';
import { ContactComponent } from './layout/components/contact/contact.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { QuoteComponent } from './layout/components/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TrainingComponent,
    QuoteComponent,
    InformationComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
