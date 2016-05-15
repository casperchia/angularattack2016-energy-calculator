import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'text-input',
    templateUrl: 'text-input.component.html',
    styleUrls: []
})
export class TextInputComponent implements OnInit {
    @Input() inputModel;
    @Output() inputModelChange: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    onChange(value){
        this.inputModelChange.emit(value);
    }
}
