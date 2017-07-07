import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private book = {
    title: "dummy title",
    description: "dummy description",
    unitCost: "123",
    isbn: "13-1234-43215",
    nbOfPages: "123",
    language: "English",
    url: "http://ecx.images-amazon.com/images/I/51amFVZbyKL._SL160_.jpg"
  };

}
