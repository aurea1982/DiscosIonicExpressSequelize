import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDiscosPage } from './my-discos.page';

describe('MyDiscosPage', () => {
  let component: MyDiscosPage;
  let fixture: ComponentFixture<MyDiscosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDiscosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
