import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IBook from 'src/app/services/book/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book: IBook = {} as IBook;
  @Input() text: string = '';
  @Output() bookEmitter = new EventEmitter<IBook>();

  constructor() {}

  ngOnInit(): void {}

  addToCart() {
    this.bookEmitter.emit(this.book);
    console.log('added', this.book);
  }
}
