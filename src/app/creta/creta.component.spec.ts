import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CretaComponent } from './creta.component';

describe('CretaComponent', () => {
  let component: CretaComponent;
  let fixture: ComponentFixture<CretaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CretaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
