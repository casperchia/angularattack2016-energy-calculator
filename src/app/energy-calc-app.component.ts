import { Component } from '@angular/core';
import {ApplianceDropdownComponent} from "./shared/input/appliance-dropdown/appliance-dropdown.component";

@Component({
  moduleId: module.id,
  selector: 'energy-calc-app-app',
  templateUrl: 'energy-calc-app.component.html',
  styleUrls: ['energy-calc-app.component.css'],
  directives: [ApplianceDropdownComponent]
})
export class EnergyCalcAppAppComponent {
  title = 'energy-calc-app works!';
}
