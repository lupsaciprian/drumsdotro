import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixcloudItemComponent } from './mixcloud-item.component';

describe('MixcloudItemComponent', () => {
  let component: MixcloudItemComponent;
  let fixture: ComponentFixture<MixcloudItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixcloudItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixcloudItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
