import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  available: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000/books'; // JSON Server URL

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.get<Book[]>(this.apiUrl).pipe(
      // Fetch all books
      map((books: { id: any; }[]) => {
        // Calculate the next id based on the maximum id in the existing books
        const maxId = books.length > 0 ? Math.max(...books.map((b: { id: any; }) => b.id)) : 0;
        return { ...book, id: maxId + 1 }; // Add the next id
      }),
      // Send the new book to the backend
      switchMap((newBook) => this.http.post<Book>(this.apiUrl, newBook))
    );
  }
  

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}