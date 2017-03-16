import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `<ng-content></ng-content><div *ngIf="isLoading" class="overlay"><i class="fa fa-refresh fa-spin"></i></div>`,
  styles: [`
  :host {
    display: block;
    position: relative;
  }
  :host > .overlay {
    z-index: 50;
    background: rgba(255,255,255,0.7);
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  :host > .overlay>.fa {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -15px;
    color: #2b9680;
    font-size: 30px;
  }
    `]
})
export class BoxComponent implements OnInit {

  @Input() isLoading: boolean = false;

  @HostBinding('class.ibox') box: boolean = true;
  @HostBinding('class.hide') @Input() hidden: boolean = false;
  @HostBinding('class.collapsed') @Input() collapse: boolean = false;

  constructor() { }

  ngOnInit() { }

  public toggleCollapse(collapse: boolean) {
    this.collapse = collapse;
  }

  public hideBox() {
    this.hidden = true;
  }

}
