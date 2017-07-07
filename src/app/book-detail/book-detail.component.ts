import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private book = {
    title: "dummy title",
    description: "dummy description",
    unitCost: "123",
    isbn: "13-1234-43215",
    nbOfPages: "123",
    language: "English"
  };

}
