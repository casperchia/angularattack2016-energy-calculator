export class Object2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('object2-app h1')).getText();
  }
}
