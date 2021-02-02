import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  aa = true;

  // @Input()
  // get isMenuCollapsed(): boolean { return this._isMenuCollapsed; }
  // set isMenuCollapsed(isMenuCollapsed: boolean) {
  //   this._isMenuCollapsed = isMenuCollapsed;
  // }
  // private _isMenuCollapsed = true;

  @Output() outputElementId: EventEmitter<string> = new EventEmitter<string>();

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
  }

  scroll(elementId: string): void {
    // this.isMenuCollapsed = true;
    // this.aa = true;

    this.outputElementId.emit(elementId);

    // this.aa = this._dataService.getIsMenuExpanded();

      // this._dataService.getIsMenuExpanded()
      //   .subscribe(data => {
      //     setTimeout(()=>{ this.display = "" }, 4000)
      //   }
    // this.aa = true;

  }



  test(value: any): void {
    console.log(value);
    // console.log(this.aa);
  }


}
