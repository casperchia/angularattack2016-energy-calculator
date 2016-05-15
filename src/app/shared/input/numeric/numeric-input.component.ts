import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'numeric-input',
    templateUrl: 'numeric-input.component.html',
    styleUrls: ['numeric-input.component.css']
})
export class NumericInputComponent implements OnInit {
    @Input() inputModel;
    @Output() inputChange: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    onChange(value){
        this.inputChange.emit(value);
    }
}
