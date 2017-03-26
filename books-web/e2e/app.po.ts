import { browser, element, by } from 'protractor';

export class BooksWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bookst-root h1')).getText();
  }
}
