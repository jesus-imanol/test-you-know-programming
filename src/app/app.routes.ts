import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', component:HomeComponent}
];
