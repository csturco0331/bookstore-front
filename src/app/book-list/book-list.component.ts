import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private nbBooks: number = 3;

  private books = [
    {
      id: "1",
      title: "title 1",
      url: "http://ecx.images-amazon.com/images/I/51amFVZbyKL._SL160_.jpg",
      description: "description 1"
    },
    {
      id: "2",
      title: "title 2",
      url: "http://ecx.images-amazon.com/images/I/51amFVZbyKL._SL160_.jpg",
      description: "description 2"
    }
  ];

}
