import { ResolveFn } from '@angular/router';
import {BookService} from '../services/book.service';
import {inject} from '@angular/core';
import {BookShortDtoModel} from '../models/book-short-dto.model';

export const bookResolver: ResolveFn<BookShortDtoModel[]> = (route, state) => {
  const bookService: BookService = inject(BookService);
  return bookService.getAll();
};
