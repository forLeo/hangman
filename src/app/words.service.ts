import { Injectable } from '@angular/core';
import { words } from "./words";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  wordList : string[] = words;
  
  constructor() { }

  getRandomWord() {
    let randomNumber = Math.floor((Math.random() * this.wordList.length) + 0);
    let randomWord = this.wordList[randomNumber]
    return randomWord;
  }
}