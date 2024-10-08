import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared2DirectivaComponent } from './shared2-directiva.component';

describe('Shared2DirectivaComponent', () => {
  let component: Shared2DirectivaComponent;
  let fixture: ComponentFixture<Shared2DirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shared2DirectivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shared2DirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
