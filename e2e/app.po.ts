export class EnergyCalcAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('energy-calc-app-app h1')).getText();
  }
}
