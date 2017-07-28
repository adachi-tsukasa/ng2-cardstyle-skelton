import { Ng2CardstyleSkeltonPage } from './app.po';

describe('ng2-cardstyle-skelton App', () => {
  let page: Ng2CardstyleSkeltonPage;

  beforeEach(() => {
    page = new Ng2CardstyleSkeltonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
