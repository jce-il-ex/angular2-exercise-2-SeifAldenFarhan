import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }
 arr = [{name:"home"},{name:"about"},{name:"signin"},{name:"signout"}];

  ngOnInit() {
  }

}
