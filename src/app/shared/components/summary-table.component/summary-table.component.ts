import { Component, OnInit, Input, OnChanges} from '@angular/core';
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

export class SummaryTableComponent implements OnInit, OnChanges{
    @Input() appliances: Appliance[];
    @Input() trigger = {};
    dailyCostTotal: number = 0;

    ngOnInit(){
    }

    ngOnChanges(changes){
        this.calculateTotal(this.appliances);
    }

    calculateTotal(appliances:Appliance[]){
        this.dailyCostTotal = 0;
      for(let i=0; i < appliances.length; i++){
        this.dailyCostTotal = this.dailyCostTotal + this.appliances[i].cost;
      }
        console.log(this.dailyCostTotal);
    }

    get diagnostic() { return JSON.stringify(this.appliances, null, 4); }

}
