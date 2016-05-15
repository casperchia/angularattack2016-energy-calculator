import { Component, OnInit, Input} from '@angular/core';
import {Appliance} from "../../../shared/model/Appliance";
import {CostCalculatorPipe} from "../../../shared/input/pipes/CostCalculatorPipe";

@Component({
    moduleId: module.id,
    selector: 'summary-table',
    templateUrl: 'summary-table.component.html',
    styleUrls: ['summary-table.component.css'],
    directives: [],
    pipes: [CostCalculatorPipe]
})

export class SummaryTableComponent implements OnInit{
    @Input() appliances: Appliance[];
    dailyCostTotal: number;
    monthlyCostTotal:number;
    quarterlyCostTotal:number;
    yearlyCostTotal:number;

    ngOnInit(){
    }

    calculateTotal(appliances:Appliance[]){
      for(let i=0; i < appliances.length; i++){
        this.dailyCostTotal = this.dailyCostTotal + this.appliances[i].cost;
        this.monthlyCostTotal = this.monthlyCostTotal + (this.appliances[i].cost *30);
        this.quarterlyCostTotal = this.quarterlyCostTotal + (this.appliances[i].cost * 90);
        this.yearlyCostTotal = this.yearlyCostTotal + (this.appliances[i].cost * 360);
      }
    }

    get diagnostic() { return JSON.stringify(this.appliances, null, 4); }

}
