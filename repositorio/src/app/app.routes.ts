import { Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { ServicioBasicoComponent } from './component/servicios/servicio-basico/servicio-basico.component';
import { ServicioIntermedioComponent } from './component/servicios/servicio-intermedio/servicio-intermedio.component';
import { ServicioAvanzadoComponent } from './component/servicios/servicio-avanzado/servicio-avanzado.component';
import { PagoComponent } from './component/pago/pago.component';
import { PrivacypolicyComponent } from './component/misc/privacypolicy/privacypolicy.component';
import { ApiComponent } from './component/api/api.component';
import { ServicioComponent } from './component/servicio/servicio.component';

export const routes: Routes = [
    {path: 'home', title: 'home', component: HomeComponent},
    {path: 'card', title: 'card', component: CardComponent},
    {path: 'contact', title: 'contact', component: ContactComponent},
    {path: 'footer', title: 'footer', component: FooterComponent},
    {path: 'navbar', title: 'navbar', component: NavbarComponent},
    {path: 'pago', title: 'pago',component: PagoComponent},
    {path: 'register', title: 'register', component: RegisterComponent},
    {path: 'sign-in', title: 'sign-in', component: SignInComponent},
    {path: 'basico', title: 'basico', component: ServicioBasicoComponent},
    {path: 'intermedio', title: 'intermedio', component: ServicioIntermedioComponent},
    {path: 'avanzado', title: 'avanzado', component: ServicioAvanzadoComponent},
    {path: 'privacypolicy', title: 'privacypolicy', component: PrivacypolicyComponent},
    {path: 'api', title: 'api', component: ApiComponent},
    {path: "", redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PagenotfoundComponent },

    {
      path: "servicios/:index",
      component: ServicioComponent
    }

];
