import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunioesListComponent } from './reunioes-list.component';

describe('ReunioesListComponent', () => {
  let component: ReunioesListComponent;
  let fixture: ComponentFixture<ReunioesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReunioesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunioesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
