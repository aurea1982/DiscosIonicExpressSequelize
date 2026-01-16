import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeathMetalPage } from './death-metal.page';

describe('DeathMetalPage', () => {
  let component: DeathMetalPage;
  let fixture: ComponentFixture<DeathMetalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathMetalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
