import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {BookShortDtoModel} from '../models/book-short-dto.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly _http: HttpClient = inject(HttpClient);

  constructor() { }

  getAll() {
    return this._http.get<BookShortDtoModel[]>(`${environment.API_URL}/books`);
  }
}
