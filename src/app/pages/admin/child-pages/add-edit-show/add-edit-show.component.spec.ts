import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditShowComponent } from './add-edit-show.component';

describe('AddEditShowComponent', () => {
  let component: AddEditShowComponent;
  let fixture: ComponentFixture<AddEditShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
