import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Book } from '../service/model/Book';
import { BookApi } from '../service/api/bookApi';


@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  constructor(private router: Router, private bookService: BookApi, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map(params => params['bookId'])
      .switchMap(id => this.bookService.findBook(id))
      .subscribe(book => this.book = book);
  }

  delete() {
    this.bookService.deleteBook(this.book.id)
      .finally(() => this.router.navigate(['/book-list']))
      .subscribe();
  }

  private book = new Book();

}
