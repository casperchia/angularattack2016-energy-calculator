import { Component, OnInit} from '@angular/core';
import {DropdownComponent} from "./shared/input/dropdown/dropdown.component";
import {Appliance} from "./shared/model/Appliance";
import {NumericInputComponent} from "./shared/input/numeric/numeric-input.component";
import {ItemCostComponent} from "./shared/components/item-cost/item-cost.component";
import {SummaryTableComponent} from "./shared/components/summary-table.component/summary-table.component";

@Component({
  moduleId: module.id,
  selector: 'energy-calc-app',
  templateUrl: 'energy-calc-app.component.html',
  styleUrls: ['energy-calc-app.component.css'],
  directives: [DropdownComponent, NumericInputComponent, ItemCostComponent, SummaryTableComponent]
})

export class EnergyCalcAppAppComponent implements OnInit{
  title = 'energy-calc-app works!';
  appliances: Appliance[] = [];


  ngOnInit(){
    this.addAppliance();
  }

  addAppliance(){
    this.appliances.push(new Appliance());
  }

  get diagnostic() { return JSON.stringify(this.appliances, null, 4); }

}
