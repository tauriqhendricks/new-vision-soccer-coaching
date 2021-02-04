import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-bar-sm',
  templateUrl: './nav-bar-sm.component.html',
  styleUrls: ['./nav-bar-sm.component.scss']
})
export class NavBarSmComponent implements OnInit {

  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  scrollView(elementId: string): void {

    const el = document.getElementById(elementId);
    el.scrollIntoView(true);

  }

}
