import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryProfileComponent } from './primary-profile.component';

describe('PrimaryProfileComponent', () => {
  let component: PrimaryProfileComponent;
  let fixture: ComponentFixture<PrimaryProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
