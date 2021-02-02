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
import { HeaderComponent } from './layout/components/header/header.component';
import { NavBarComponent } from './layout/components/nav-bar/nav-bar.component';
import { Routes, RouterModule } from '@angular/router';

import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TrainingComponent,
    QuoteComponent,
    InformationComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
