import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayObjectComponent } from './array-object.component';

describe('ArrayObjectComponent', () => {
  let component: ArrayObjectComponent;
  let fixture: ComponentFixture<ArrayObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
