import {Component, inject, Input, signal, WritableSignal} from '@angular/core';
import { BookService } from '../../services/book.service';
import {BookShortDtoModel} from '../../models/book-short-dto.model';
import {DataView} from 'primeng/dataview';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';

@Component({
  selector: 'app-book-index',
  imports: [
    DataView
  ],
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss'
})
export class BookIndexComponent {

  private readonly _bookService: BookService = inject(BookService);
  @Input()
  books: BookShortDtoModel[] = [] as BookShortDtoModel[];

  constructor() {
  }
}
