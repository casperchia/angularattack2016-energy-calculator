import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dropdown',
    templateUrl: 'dropdown.component.html',
    styleUrls: ['dropdown.component.css']
})
export class DropdownComponent implements OnInit {
    @Input() choices: string[];
    @Input() inputModel;
    @Input() default: boolean = true;
    @Output() inputModelChange: EventEmitter<any> = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

    onChange(value){
        this.inputModelChange.emit(value);
    }
}
