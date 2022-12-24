import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretsComponent } from './secrets/secrets.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SecretMessageComponent } from './secret-message/secret-message.component';
import { BestandteileComponent } from './bestandteile/bestandteile.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretsComponent,
    WelcomeComponent,
    SecretMessageComponent,
    BestandteileComponent,
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