import { Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewslistComponent } from './pages/newslist/newslist.component';
import { Test01Component } from './test01/test01.component';

export const routes: Routes = [

    { path: '', component: HomeComponent }, // Default route
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewslistComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'test01', component: Test01Component },
    { path: '**', redirectTo: '' } // Wildcard route for undefined paths


];
