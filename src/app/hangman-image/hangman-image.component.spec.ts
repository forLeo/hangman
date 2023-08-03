import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanImageComponent } from './hangman-image.component';

describe('HangmanImageComponent', () => {
  let component: HangmanImageComponent;
  let fixture: ComponentFixture<HangmanImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanImageComponent]
    });
    fixture = TestBed.createComponent(HangmanImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
