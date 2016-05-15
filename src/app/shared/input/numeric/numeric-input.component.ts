import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'numeric-input',
    templateUrl: 'numeric-input.component.html',
    styleUrls: ['numeric-input.component.css']
})
export class NumericInputComponent implements OnInit {
    @Input() inputModel;
    @Output() inputModelChange: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    onChange(value){
        this.inputModelChange.emit(value);
    }
}
