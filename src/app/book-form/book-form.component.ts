import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookService } from '../book.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  isEdit = false;
  bookId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      available: [true],
    });
  }
  
  ngOnInit(): void {
    this.bookId = +this.route.snapshot.params['id'] || null;

    if (this.bookId !== null) {
      this.isEdit = true;
      this.bookService.getBook(this.bookId).subscribe((book) => {
        this.bookForm.patchValue(book);
      });
    }
  }

  cancel(): void {
    console.log('Cancel button clicked, navigating to the book list.');
    this.router.navigate(['/']);
  }

  submitForm(): void {
    const book: Book = this.bookForm.value as Book;

    if (this.isEdit && this.bookId !== null) {
      this.bookService.updateBook(this.bookId, book).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.bookService.addBook(book).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
