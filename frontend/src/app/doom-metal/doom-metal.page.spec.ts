import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoomMetalPage } from './doom-metal.page';

describe('DoomMetalPage', () => {
  let component: DoomMetalPage;
  let fixture: ComponentFixture<DoomMetalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoomMetalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
