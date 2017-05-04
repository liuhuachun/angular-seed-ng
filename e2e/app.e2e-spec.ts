import { AngularSeedNgPage } from './app.po';

describe('angular-seed-ng App', () => {
  let page: AngularSeedNgPage;

  beforeEach(() => {
    page = new AngularSeedNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('系统管理平台');
  });
});
