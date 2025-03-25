import { Routes } from '@angular/router';
import {bookResolver} from './features/book/resolvers/book.resolver';
import {isConnectedGuard} from './shared/guards/is-connected.guard';

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
  {
    path: 'book/create',
    loadComponent: () => import('./features/book/pages/book-create/book-create.component').then(m => m.BookCreateComponent),
    canActivate: [isConnectedGuard]
  },
];
