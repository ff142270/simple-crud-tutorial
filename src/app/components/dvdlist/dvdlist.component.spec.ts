import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVDlistComponent } from './dvdlist.component';

describe('DVDlistComponent', () => {
  let component: DVDlistComponent;
  let fixture: ComponentFixture<DVDlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVDlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVDlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
