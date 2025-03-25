import {Component, computed, effect, inject, Input, Signal, signal, WritableSignal} from '@angular/core';
import { BookService } from '../../services/book.service';
import {BookShortDtoModel} from '../../models/book-short-dto.model';
import {DataView} from 'primeng/dataview';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {map} from 'rxjs';
import {Button} from 'primeng/button';
import {AuthService} from '../../../auth/services/auth.service';
import {UserTokenDto} from '../../../auth/models/user-token-dto';

@Component({
  selector: 'app-book-index',
  imports: [
    DataView,
    Button,
    RouterLink
  ],
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss'
})
export class BookIndexComponent {

  private readonly _bookService: BookService = inject(BookService);
  private readonly _authService: AuthService = inject(AuthService);

  @Input()
  books: BookShortDtoModel[] = [] as BookShortDtoModel[];

  currentUser: WritableSignal<UserTokenDto|undefined>;
  isConnected: Signal<boolean>;

  constructor() {
    this.currentUser = this._authService.currentUser
    this.isConnected = computed(() => {
      return !!this.currentUser();
    });
  }
}
