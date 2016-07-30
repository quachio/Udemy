import { Routing04Page } from './app.po';

describe('routing-04 App', function() {
  let page: Routing04Page;

  beforeEach(() => {
    page = new Routing04Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
