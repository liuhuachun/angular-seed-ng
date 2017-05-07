import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsComponent } from './navs.component';
import { RouterLinkStubDirective } from '../../../testing/router-stubs';

describe('NavsComponent', () => {
  let component: NavsComponent;
  let fixture: ComponentFixture<NavsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavsComponent,
        RouterLinkStubDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsComponent);
    component    = fixture.componentInstance;
    component.menu = {
      'tf_iconCls': null,
      'tf_expand': null,
      'tf_Menus': [],
      'title': '监控墙',
      'routeId': 'about',
      'menuType': 'module',
      'menuTypeId': '701010'
    };
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
