import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './side-menu-bar.component.html',
  styleUrls: ['./side-menu-bar.component.sass']
})
export class SideMenuBarComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
