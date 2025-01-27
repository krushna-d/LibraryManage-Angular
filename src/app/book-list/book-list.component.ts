import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book, BookService } from '../book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = []; // Filtered list for display
  searchTerm: string = ''; // Search term


  constructor(private bookService: BookService, private router: Router) {}
  ngOnInit(): void {
    // Fetch the book list
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
      this.filteredBooks = data; // Initialize the filtered list
    });
  }

  editBook(id: number): void {
    this.router.navigate(['/edit', id]);
  }
  filterBooks(): void {
    const lowerCaseTerm = this.searchTerm.toLowerCase();
    this.filteredBooks = this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerCaseTerm) ||
        book.author.toLowerCase().includes(lowerCaseTerm)
    );
  }

  navigateToAddBook(): void {
    this.router.navigate(['/add']);
  }

  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.books = this.books.filter((book) => book.id !== id);
      this.filterBooks();
    });
  }
}
