import { BooksWebPage } from './app.po';

describe('books-web App', function() {
  let page: BooksWebPage;

  beforeEach(() => {
    page = new BooksWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bookst works!');
  });
});
