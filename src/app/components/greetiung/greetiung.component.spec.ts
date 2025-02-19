import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetiungComponent } from './greetiung.component';

describe('GreetiungComponent', () => {
  let component: GreetiungComponent;
  let fixture: ComponentFixture<GreetiungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetiungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetiungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
