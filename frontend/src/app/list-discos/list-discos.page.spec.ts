import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDiscosPage } from './list-discos.page';

describe('ListDiscosPage', () => {
  let component: ListDiscosPage;
  let fixture: ComponentFixture<ListDiscosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiscosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
