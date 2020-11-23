import { JalluPredixWebappPage } from './app.po';

describe('jallu-predix-webapp App', () => {
  let page: JalluPredixWebappPage;

  beforeEach(() => {
    page = new JalluPredixWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
