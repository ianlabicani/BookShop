import { Injectable } from '@angular/core';
import IBook from '../book/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  books: IBook[] = [];

  constructor() {}

  addBook(book: IBook) {
    this.books.push(book);
  }

  removeBook(book: IBook) {
    this.books = this.books.filter((val) => val.title !== book.title);
  }

  getBooks(): IBook[] {
    return this.books;
  }
}
