import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboIIIComponent } from './labo-iii.component';

describe('LaboIIIComponent', () => {
  let component: LaboIIIComponent;
  let fixture: ComponentFixture<LaboIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboIIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
