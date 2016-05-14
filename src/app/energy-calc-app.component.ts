import { Component, OnInit} from '@angular/core';
import {DropdownComponent} from "./shared/input/dropdown/dropdown.component";
import {Appliance} from "./shared/model/Appliance";

@Component({
  moduleId: module.id,
  selector: 'energy-calc-app-app',
  templateUrl: 'energy-calc-app.component.html',
  styleUrls: ['energy-calc-app.component.css'],
  directives: [DropdownComponent]
})
export class EnergyCalcAppAppComponent implements OnInit{
  title = 'energy-calc-app works!';
  applianceList: string[] = [
      'TV/Monitor',
      'Lightbulb',
      'Washing Machine'
  ]
  appliance: Appliance;

  ngOnInit(){
    this.appliance = new Appliance();
  }

  get diagnostic() { return JSON.stringify(this.appliance, null, 4); }

}
