import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'numeric-dropdown',
    templateUrl: 'numeric-dropdown.component.html',
    styleUrls: []
})

export class NumericDropdownComponent implements OnInit {
    @Input() inputModel;
    @Input() min = 0;
    @Input() max = 10;
    @Output() inputChange: EventEmitter<any> = new EventEmitter();
    choices: number[] = [];

    constructor() {}

    ngOnInit() {
        for(let i = this.min; i <= this.max; i++){
            this.choices.push(i);
        }
    }

    onChange(value){
        this.inputChange.emit(value);
    }
}
