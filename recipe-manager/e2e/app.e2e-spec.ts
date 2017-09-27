import { RecipeManagerPage } from './app.po';

describe('recipe-manager App', function() {
  let page: RecipeManagerPage;

  beforeEach(() => {
    page = new RecipeManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
