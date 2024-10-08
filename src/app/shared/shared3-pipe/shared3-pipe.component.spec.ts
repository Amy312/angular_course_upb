import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared3PipeComponent } from './shared3-pipe.component';

describe('Shared3PipeComponent', () => {
  let component: Shared3PipeComponent;
  let fixture: ComponentFixture<Shared3PipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shared3PipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shared3PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
