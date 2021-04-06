import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdByImageComponent } from './prod-by-image.component';

describe('ProdByImageComponent', () => {
  let component: ProdByImageComponent;
  let fixture: ComponentFixture<ProdByImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdByImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdByImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
