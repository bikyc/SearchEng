import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultPageComponent } from './list-result-page.component';

describe('ListResultPageComponent', () => {
  let component: ListResultPageComponent;
  let fixture: ComponentFixture<ListResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
