import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThrashMetalPage } from './thrash-metal.page';

describe('ThrashMetalPage', () => {
  let component: ThrashMetalPage;
  let fixture: ComponentFixture<ThrashMetalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrashMetalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
