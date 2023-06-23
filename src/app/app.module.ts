import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisaCardComponent } from './form/visa-card/visa-card.component';
import { YearCardPipe } from './pipes/year-card/year-card.pipe';
import { BackgroundComponent } from './form/visa-card/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    VisaCardComponent,
    YearCardPipe,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
