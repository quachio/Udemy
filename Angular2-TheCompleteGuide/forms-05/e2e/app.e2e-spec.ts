import { Forms05Page } from './app.po';

describe('forms-05 App', function() {
  let page: Forms05Page;

  beforeEach(() => {
    page = new Forms05Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
