import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.scss']
})
export class NavsComponent implements OnInit {
  @Input() public  menu: any ;
  @Output() onClickWord = new EventEmitter<boolean>();
  isActive: boolean;
  isWord: boolean;

  constructor() {
    this.isActive = false;
    this.isWord = false;
  }
  ngOnInit() {
  }
  clickTree() {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.menu.tf_iconCls = this.menu.tf_iconCls + '_blue';
    } else {
      const length = this.menu.tf_iconCls.length;
      this.menu.tf_iconCls = this.menu.tf_iconCls.substring(0, length - 5);
    }
  }
  clickWord(index: any) {
    this.onClickWord.emit(true);
    this.isWord = index;
  }
}
