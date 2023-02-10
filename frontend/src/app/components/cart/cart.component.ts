import { Component, OnInit } from '@angular/core';
import IBook from 'src/app/services/book/book';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  books: IBook[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.books = this.cartService.getBooks();
  }

  removeBook(book: IBook) {
    this.cartService.removeBook(book);
  }
}
