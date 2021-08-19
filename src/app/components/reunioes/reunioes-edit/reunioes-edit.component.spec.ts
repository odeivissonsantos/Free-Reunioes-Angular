import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunioesEditComponent } from './reunioes-edit.component';

describe('ReunioesEditComponent', () => {
  let component: ReunioesEditComponent;
  let fixture: ComponentFixture<ReunioesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunioesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunioesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
