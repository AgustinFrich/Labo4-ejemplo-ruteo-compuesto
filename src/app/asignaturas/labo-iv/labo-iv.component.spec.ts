import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboIVComponent } from './labo-iv.component';

describe('LaboIVComponent', () => {
  let component: LaboIVComponent;
  let fixture: ComponentFixture<LaboIVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboIVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
