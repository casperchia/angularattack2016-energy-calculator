import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'appliance-dropdown',
  templateUrl: 'appliance-dropdown.component.html',
  styleUrls: ['appliance-dropdown.component.css']
})
export class ApplianceDropdownComponent implements OnInit {
  choices: string[] = [
      'CFL Light Bulb',
      'Incandescent Bulb',
      'LCD/LED TV'
  ];

  constructor() {}

  ngOnInit() {
  }

}
