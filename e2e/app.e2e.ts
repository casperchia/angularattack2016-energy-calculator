import { Object2Page } from './app.po';

describe('object2 App', function() {
  let page: Object2Page;

  beforeEach(() => {
    page = new Object2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('object2 works!');
  });
});
