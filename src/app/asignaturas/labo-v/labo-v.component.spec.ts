import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboVComponent } from './labo-v.component';

describe('LaboVComponent', () => {
  let component: LaboVComponent;
  let fixture: ComponentFixture<LaboVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
