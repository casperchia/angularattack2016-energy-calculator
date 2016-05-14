import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EnergyCalcAppAppComponent } from '../app/energy-calc-app.component';

beforeEachProviders(() => [EnergyCalcAppAppComponent]);

describe('App: EnergyCalcApp', () => {
  it('should create the app',
      inject([EnergyCalcAppAppComponent], (app: EnergyCalcAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'energy-calc-app works!\'',
      inject([EnergyCalcAppAppComponent], (app: EnergyCalcAppAppComponent) => {
    expect(app.title).toEqual('energy-calc-app works!');
  }));
});
