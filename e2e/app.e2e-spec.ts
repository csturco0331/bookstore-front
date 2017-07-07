import { BookstoreFrontPage } from './app.po';

describe('bookstore-front App', () => {
  let page: BookstoreFrontPage;

  beforeEach(() => {
    page = new BookstoreFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to bs!!');
  });
});
