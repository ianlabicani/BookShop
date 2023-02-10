import { Injectable } from '@angular/core';
import { books } from 'src/app/services/book/mock-data';
import IBook from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): IBook[] {
    return books;
  }
}
