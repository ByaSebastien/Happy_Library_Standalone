import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../../services/book.service';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {DatePicker} from 'primeng/datepicker';

@Component({
  selector: 'app-book-create',
  imports: [
    Button,
    FloatLabel,
    FormsModule,
    InputText,
    ReactiveFormsModule,
    DatePicker
  ],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _bookService: BookService = inject(BookService);

  bookForm: FormGroup;

  constructor() {
    this.bookForm = this._fb.group({
      isbn: [null, [Validators.required,Validators.minLength(11),Validators.maxLength(13)]],
      title: [null,[Validators.required,Validators.maxLength(150)]],
      author: [null, [Validators.required,Validators.maxLength(150)]],
      description: [null,[Validators.maxLength(255)]],
      releaseDate: [null,[Validators.required]],
    });
  }

  submit() {
    this.bookForm.markAllAsTouched();

    if(this.bookForm.invalid) {
      console.log(this.bookForm.value);
      return;
    }

    this._bookService.create(this.bookForm.value).subscribe({
      next: () => {
        this._router.navigate(['/book']);
      },
      error: err => {
        console.log(err);
      }
    })
  }
}
