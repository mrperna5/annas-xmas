import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecretMessageComponent } from './secret-message/secret-message.component';
import { SecretsComponent } from './secrets/secrets.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '',  redirectTo: '/willkommen', pathMatch: 'full' },
  { path: 'willkommen', component: WelcomeComponent },
  { path: 'geheimnisse', component: SecretsComponent },
  { path: 'geheimeNachricht/:id', component: SecretMessageComponent },

  { path: '**', component: WelcomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }