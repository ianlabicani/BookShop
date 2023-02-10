import { Component, OnInit } from '@angular/core';
import IBook from 'src/app/services/book/book';
import { BookService } from 'src/app/services/book/book.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: IBook[] = [];

  constructor(
    private bookService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addBook(book: IBook) {
    this.cartService.addBook(book);
  }
}
