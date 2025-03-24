import { Routes } from '@angular/router';
import {bookResolver} from './features/book/resolvers/book.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'book',
    loadComponent: () => import('./features/book/pages/book-index/book-index.component').then(m => m.BookIndexComponent),
    resolve: {
      books: bookResolver
    }
  },
];
