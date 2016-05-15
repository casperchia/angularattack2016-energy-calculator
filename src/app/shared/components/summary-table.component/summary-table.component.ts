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
    monthlyCostTotal:number = 0;
    quarterlyCostTotal:number = 0;
    yearlyCostTotal:number = 0;

    ngOnInit(){
    }

    ngOnChanges(changes){
        this.calculateTotal(this.appliances);
    }

    calculateTotal(appliances:Appliance[]){
        this.dailyCostTotal = 0;
        this.monthlyCostTotal = 0;
        this.quarterlyCostTotal = 0;
        this.yearlyCostTotal = 0;
      for(let i=0; i < appliances.length; i++){
        this.dailyCostTotal = this.dailyCostTotal + this.appliances[i].cost;
        this.monthlyCostTotal = this.monthlyCostTotal + (this.appliances[i].cost *30);
        this.quarterlyCostTotal = this.quarterlyCostTotal + (this.appliances[i].cost * 91);
        this.yearlyCostTotal = this.yearlyCostTotal + (this.appliances[i].cost * 365);
      }
        console.log(this.dailyCostTotal);
    }

    get diagnostic() { return JSON.stringify(this.appliances, null, 4); }

}
