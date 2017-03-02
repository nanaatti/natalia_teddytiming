import { TestTeddyTimingPage } from './app.po';

describe('test-teddy-timing App', () => {
  let page: TestTeddyTimingPage;

  beforeEach(() => {
    page = new TestTeddyTimingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
