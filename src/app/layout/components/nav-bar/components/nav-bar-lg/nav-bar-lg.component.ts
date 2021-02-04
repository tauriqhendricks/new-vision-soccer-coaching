import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-lg',
  templateUrl: './nav-bar-lg.component.html',
  styleUrls: ['./nav-bar-lg.component.scss']
})
export class NavBarLgComponent implements OnInit {

  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  scrollView(elementId: string): void {

    const el = document.getElementById(elementId);
    el.scrollIntoView(true);

  }

}
