import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePComponent } from './mobile-p.component';

describe('MobilePComponent', () => {
  let component: MobilePComponent;
  let fixture: ComponentFixture<MobilePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
