import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessedLettersComponent } from './guessed-letters.component';

describe('GuessedLettersComponent', () => {
  let component: GuessedLettersComponent;
  let fixture: ComponentFixture<GuessedLettersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuessedLettersComponent]
    });
    fixture = TestBed.createComponent(GuessedLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
