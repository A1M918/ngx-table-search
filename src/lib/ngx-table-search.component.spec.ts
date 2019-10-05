import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTableSearchComponent } from './ngx-table-search.component';

describe('NgxTableSearchComponent', () => {
  let component: NgxTableSearchComponent;
  let fixture: ComponentFixture<NgxTableSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTableSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
