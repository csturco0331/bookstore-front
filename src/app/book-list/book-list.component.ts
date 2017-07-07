import { Component, OnInit } from '@angular/core';
import { Book } from '../service/model/Book';
import { BookApi } from '../service/api/bookApi';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookApi) { }

  ngOnInit() {
    this.bookService.countAllBooks().subscribe(nbBooks => this.nbBooks = nbBooks);
    this.bookService.findAllBooks().subscribe(books => this.books = books);
  }

  private nbBooks: number;

  private books: Book[];

}
