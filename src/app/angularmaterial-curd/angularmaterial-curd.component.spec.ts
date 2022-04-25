import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularmaterialCurdComponent } from './angularmaterial-curd.component';

describe('AngularmaterialCurdComponent', () => {
  let component: AngularmaterialCurdComponent;
  let fixture: ComponentFixture<AngularmaterialCurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularmaterialCurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularmaterialCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
