import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-box-tools',
  template: `
      <ng-content></ng-content>
      <button *ngIf="showCollapseBtn" (click)="emitCollapse(!collapse)" type="button" class="btn btn-box-tool" data-widget="collapse"><i [class]="collapseIcon"></i></button>
      <button *ngIf="showRemoveBtn" (click)="hideBox.emit(true)" type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
  `,
  styles: [':host >>> .btn-group .btn { padding: 5px; font-size: 12px; background: transparent; color: #97a0b3; }']
})
export class BoxToolsComponent implements OnInit {

  @HostBinding('class')
  public classes: string = 'box-tools pull-right';

  @Output()
  public collapseBox = new EventEmitter<boolean>();

  @Output()
  public hideBox = new EventEmitter<boolean>();

  @Input()
  public showCollapseBtn: boolean = true;

  @Input()
  public showRemoveBtn: boolean = true;

  public collapse: boolean = false;
  public collapseIcon: string = 'fa fa-minus';

  public constructor() { }

  public ngOnInit() { }

  public emitCollapse(collapse: boolean) {
    this.collapseBox.emit(collapse);
    this.collapse = collapse;

    this.changeCollapseIcon(collapse);
  }

  private changeCollapseIcon(isHidden) {
    this.collapseIcon = (isHidden ? 'fa fa-plus' : this.collapseIcon = 'fa fa-minus');
  }
}
