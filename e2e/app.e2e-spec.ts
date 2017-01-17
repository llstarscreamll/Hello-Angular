import { Angular2AdminLtePage } from './app.po';

describe('angular2-admin-lte App', function() {
  let page: Angular2AdminLtePage;

  beforeEach(() => {
    page = new Angular2AdminLtePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
