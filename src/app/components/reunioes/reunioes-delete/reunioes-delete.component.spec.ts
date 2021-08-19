import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunioesDeleteComponent } from './reunioes-delete.component';

describe('ReunioesDeleteComponent', () => {
  let component: ReunioesDeleteComponent;
  let fixture: ComponentFixture<ReunioesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunioesDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunioesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
