import { EnergyCalcAppPage } from './app.po';

describe('energy-calc-app App', function() {
  let page: EnergyCalcAppPage;

  beforeEach(() => {
    page = new EnergyCalcAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('energy-calc-app works!');
  });
});
