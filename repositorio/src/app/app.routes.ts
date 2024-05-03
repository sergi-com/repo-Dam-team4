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

export const routes: Routes = [
    {path: 'card', title: 'card', component: CardComponent},
    {path: 'contact', title: 'contact', component: ContactComponent},
    {path: 'footer', title: 'footer', component: FooterComponent},
    {path: 'home', title: 'home', component: HomeComponent},
    {path: 'navbar', title: 'navbar', component: NavbarComponent},
    {path: 'register', title: 'register', component: RegisterComponent},
    {path: 'sign-in', title: 'sign-in', component: SignInComponent},
    { path: '**', component: PagenotfoundComponent }

];
