import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProdADMINComponent } from './show-prod-admin.component';

describe('ShowProdADMINComponent', () => {
  let component: ShowProdADMINComponent;
  let fixture: ComponentFixture<ShowProdADMINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProdADMINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProdADMINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
