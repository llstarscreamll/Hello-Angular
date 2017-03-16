import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-box-tools',
  template: `
      <a *ngIf="showCollapseBtn" (click)="emitCollapse(!collapse)" role="button" class="collapse-link" data-widget="collapse"><i [class]="collapseIcon"></i></a>
      <ng-content></ng-content>
      <a *ngIf="showRemoveBtn" (click)="hideBox.emit(true)" role="button" class="close-link" data-widget="remove"><i class="fa fa-times"></i></a>
  `,
  styles: [':host >>> .btn-group { vertical-align: bottom; }']
})
export class BoxToolsComponent implements OnInit {

  @HostBinding('class') classes: string = 'ibox-tools';

  @Output() collapseBox = new EventEmitter<boolean>();
  @Output() hideBox = new EventEmitter<boolean>();

  @Input() showCollapseBtn: boolean = true;
  @Input() showRemoveBtn: boolean = true;

  public collapse: boolean = false;
  public collapseIcon: string = 'fa fa-chevron-up';

  constructor() { }

  ngOnInit() { }

  public emitCollapse(collapse: boolean) {
    this.collapseBox.emit(collapse);
    this.collapse = collapse;

    this.changeCollapseIcon(collapse);
  }

  private changeCollapseIcon(isHidden) {
    this.collapseIcon = (isHidden ? 'fa fa-chevron-up' : this.collapseIcon = 'fa fa-chevron-down');
  }

}
