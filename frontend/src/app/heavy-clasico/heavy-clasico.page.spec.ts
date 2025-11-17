import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeavyClasicoPage } from './heavy-clasico.page';

describe('HeavyClasicoPage', () => {
  let component: HeavyClasicoPage;
  let fixture: ComponentFixture<HeavyClasicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyClasicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
