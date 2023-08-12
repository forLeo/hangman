import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDisplayComponent } from './word-display.component';

describe('WordDisplayComponent', () => {
  let component: WordDisplayComponent;
  let fixture: ComponentFixture<WordDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordDisplayComponent]
    });
    fixture = TestBed.createComponent(WordDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});