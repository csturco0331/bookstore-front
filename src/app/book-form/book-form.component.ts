import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../service/model/Book';
import { BookApi } from '../service/api/bookApi';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

  constructor(private router: Router, private bookService: BookApi) { }

  ngOnInit() {
  }

  create() {
    this.bookService.createBook(this.book)
      .finally(() => this.router.navigate(['/book-list']))
      .subscribe();
  }

  private book: Book = new Book();

}
