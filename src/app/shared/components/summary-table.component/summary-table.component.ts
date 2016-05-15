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

    ngOnInit(){
    }

    get diagnostic() { return JSON.stringify(this.appliances, null, 4); }

}
