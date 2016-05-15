import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {Appliance} from "../../../shared/model/Appliance";

@Component({
    moduleId: module.id,
    selector: 'cost',
    templateUrl: 'cost.component.html',
    styleUrls: ['cost.component.css'],
    directives: []
})

export class CostComponent implements OnInit, OnChanges{
    @Input() appliance: Appliance;
    @Input() powerValue: number = 0;
    @Input() units: string;
    @Input() hours: number = 0;
    @Input() minutes: number = 0;
    @Input() rates: number = 0;

    ngOnInit(){
    }

    ngOnChanges(changes){
        console.log("Changes");
        this.appliance.cost = this.calculateCost();
    }

    calculateCost(){
        let p;
        if(this.units === 'W'){
            p = this.powerValue / 1000;
        }else{
            p = this.powerValue;
        }
        let h = ((this.hours * 60) + this.minutes) / 60;
        let cost = h * p * this.rates;
        return cost;
    }

    get diagnostic() { return JSON.stringify(this.appliance, null, 4); }

}
