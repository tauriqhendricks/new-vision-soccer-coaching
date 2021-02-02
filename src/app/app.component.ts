import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isMenuCollapsed = true;

  // @Output() isMenuCollapsed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _dataService: DataService) {
  }

  ngOnInit(): void {
  }

  scrollView(elementId: string): void {
    // this.test();

    // document.getElementById(elementId).scrollIntoView({behavior: 'smooth'});

    const el = document.getElementById(elementId);

    el.scrollIntoView(true);
    // window.scrollBy(0, 1000);
    // el.scrollTop += 10;
    // this.isMenuCollapsed.emit(true);
    // this.isMenuCollapsed = true;
    // this._dataService.setIsMenuExpanded(true);

    // this.isMenuCollapsed.

    // window.scrollBy(0,-10);

    // let debounce: number;
    // let scrollDistance: number;

    // if (elementId === 'training') {
    //   debounce = 400;
    //   scrollDistance = -60;
    // } else {
    //   debounce = 700;
    //   scrollDistance = -85;
    // }

    // setTimeout(() => {
    //   window.scrollBy(0, scrollDistance);
    // }, debounce);

    // console.log('wawa');

  }

  test() {
    this.isMenuCollapsed = true;
  }

  timeout() { // pass a time in milliseconds to this function
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

}
