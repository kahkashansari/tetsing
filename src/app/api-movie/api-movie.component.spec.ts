import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMovieComponent } from './api-movie.component';

describe('ApiMovieComponent', () => {
  let component: ApiMovieComponent;
  let fixture: ComponentFixture<ApiMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
