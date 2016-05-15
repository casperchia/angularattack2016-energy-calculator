import {Component, OnInit, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {Appliance} from "../../../shared/model/Appliance";
import {CostCalculatorPipe} from "../../input/pipes/CostCalculatorPipe"

@Component({
    moduleId: module.id,
    selector: 'cost',
    templateUrl: 'cost.component.html',
    styleUrls: ['cost.component.css'],
    directives: [],
    pipes: [CostCalculatorPipe]
})

export class CostComponent implements OnInit, OnChanges{
    @Input() appliance: Appliance;
    @Input() powerValue: number = 0;
    @Input() units: string;
    @Input() hours: number = 0;
    @Input() minutes: number = 0;
    @Input() rates: number = 0;
    @Output() trigger: EventEmitter<any> = new EventEmitter();

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
        this.trigger.emit("");
        return cost;
    }

    get diagnostic() { return JSON.stringify(this.appliance, null, 4); }

}
