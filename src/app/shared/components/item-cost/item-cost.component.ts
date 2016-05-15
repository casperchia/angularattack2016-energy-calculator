import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DropdownComponent} from "../../input/dropdown/dropdown.component";
import {Appliance} from "../../../shared/model/Appliance";
import {NumericInputComponent} from "../../../shared/input/numeric/numeric-input.component";
import {NumericDropdownComponent} from "../../../shared/input/numeric-dropdown/numeric-dropdown.component";
import {CostComponent} from "../cost/cost.component";

@Component({
    moduleId: module.id,
    selector: 'item-cost',
    templateUrl: 'item-cost.component.html',
    styleUrls: ['item-cost.component.css'],
    directives: [DropdownComponent, NumericInputComponent, NumericDropdownComponent, CostComponent]
})

export class ItemCostComponent implements OnInit{
    @Input() appliance: Appliance;
    @Output() trigger: EventEmitter<any> = new EventEmitter();
    applianceList: string[] = [
        'TV/Monitor',
        'Lightbulb',
        'Washing Machine',
        'CFL Light Bulb',
        'Incandescent Bulb',
        'LCD/LED TV/Display',
        'CRT Monitor',
        'Game Console',
        'Desktop Computer',
        'Laptop/Notebook',
        'Wi-Fi Router',
        'Printer',
        'DVR',
        'Cell Phone Charger',
        'Cordless Phone',
        'Alarm Clock Radio',
        'Space Heater',
        'Water Heater',
        'Central Air Conditioner',
        'Air Conditioner',
        'Clothes Washer'
    ]
    unitList: string[] = [
        'W',
        'kW',
    ]
    rates: number = 0.33;

    ngOnInit(){
    }

    get diagnostic() { return JSON.stringify(this.appliance, null, 4); }

    onTrigger(){
        this.trigger.emit("");
    }

}
