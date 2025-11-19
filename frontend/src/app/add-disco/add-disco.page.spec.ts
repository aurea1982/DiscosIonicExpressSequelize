import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDiscoPage } from './add-disco.page';

describe('AddDiscoPage', () => {
  let component: AddDiscoPage;
  let fixture: ComponentFixture<AddDiscoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
