import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestInvetationComponent } from './guest-invetation.component';

describe('GuestInvetationComponent', () => {
  let component: GuestInvetationComponent;
  let fixture: ComponentFixture<GuestInvetationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestInvetationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestInvetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
