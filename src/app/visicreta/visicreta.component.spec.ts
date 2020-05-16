import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisicretaComponent } from './visicreta.component';

describe('VisicretaComponent', () => {
  let component: VisicretaComponent;
  let fixture: ComponentFixture<VisicretaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisicretaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisicretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
