import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMovieComponent } from './info.component';

describe('InfoMovieComponent', () => {
  let component: InfoMovieComponent;
  let fixture: ComponentFixture<InfoMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMovieComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
