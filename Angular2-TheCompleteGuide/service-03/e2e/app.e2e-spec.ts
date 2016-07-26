import { Service03Page } from './app.po';

describe('service-03 App', function() {
  let page: Service03Page;

  beforeEach(() => {
    page = new Service03Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
