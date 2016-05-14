import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ApplianceDropdownComponent } from './appliance-dropdown.component';

describe('Component: ApplianceDropdown', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ApplianceDropdownComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ApplianceDropdownComponent],
      (component: ApplianceDropdownComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ApplianceDropdownComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ApplianceDropdownComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-appliance-dropdown></app-appliance-dropdown>
  `,
  directives: [ApplianceDropdownComponent]
})
class ApplianceDropdownComponentTestController {
}

