import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-config-layout',
  templateUrl: './rule-config-layout.component.html',
  styleUrls: ['./rule-config-layout.component.sass']
})
export class RuleConfigLayoutComponent implements OnInit {

  displayedColumns = ['name', 'source', 'status'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  //position: number;
  source: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'utif/rules/common/entry-routing-rule.drl', source: 'XENIA', status: 'C'},
  {name: 'utif/rules/fiss/fiss-trade-routing.drl', source: 'FISS', status: 'M'},
  {name: 'utif/rules/gos/gos-trade-routing.drl', source: 'GOS', status: 'M'},
  {name: 'utif/rules/booker/settlement-routing.drl', source: 'BOOKER', status: 'M'},
  {name: 'utif/rules/booker/eod-msg-routing.drl', source: 'BOOKER', status: 'M'},
  {name: 'utif/rules/booker/journal-routing.drl', source: 'BOOKER', status: 'M'}  
];
