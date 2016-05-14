import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Object2AppComponent } from '../app/object2.component';

beforeEachProviders(() => [Object2AppComponent]);

describe('App: Object2', () => {
  it('should create the app',
      inject([Object2AppComponent], (app: Object2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'object2 works!\'',
      inject([Object2AppComponent], (app: Object2AppComponent) => {
    expect(app.title).toEqual('object2 works!');
  }));
});
