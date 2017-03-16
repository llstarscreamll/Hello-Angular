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

  @HostBinding('class.box-tools') boxTools: boolean = true;
  @HostBinding('class.pull-right') boxPullRight: boolean = true;

  @Output() collapseBox = new EventEmitter<boolean>();
  @Output() hideBox = new EventEmitter<boolean>();

  @Input() showCollapseBtn: boolean = true;
  @Input() showRemoveBtn: boolean = true;

  public collapse: boolean = false;
  public collapseIcon: string = 'fa fa-minus';

  constructor() { }

  ngOnInit() { }

  public emitCollapse(collapse: boolean) {
    this.collapseBox.emit(collapse);
    this.collapse = collapse;

    this.changeCollapseIcon(collapse);
  }

  private changeCollapseIcon(isHidden) {
    this.collapseIcon = (isHidden ? 'fa fa-plus' : this.collapseIcon = 'fa fa-minus');
  }

}
