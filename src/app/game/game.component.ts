import { Component } from '@angular/core';
import { WordsService } from "../words.service"

let wordsService = new WordsService();

let falseChars = 0;
let end = false;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})

export class GameComponent {
  public word!: string;
  public correctGuesses = 0;
  ngOnInit() {
    this.word = wordsService.getRandomWord();
    console.log(this.word)
    for (let count = 0; count < this.word.length; count++) {
      let p = document.createElement('p');
      p.textContent = this.word[count];
      p.setAttribute("id", "char" + (count + 1));
      p.setAttribute("class", "underline");
      document.getElementById("wordSearched")!.appendChild(p);
      document.getElementById("wordSearched")!.style.color = "transparent";
    }
  }

  letterClicked(event: any) : void {
    if (end == false)
    {
      let id = event.target.id;
    let guessRight = false;
    let letter = String.fromCharCode(parseInt(id) + 64);
    console.log(id + ", " + letter);
    let element = document.getElementById(id);
    if (element != null)
    {
      element.style.color = "rgb(196, 196, 196)";
      element.setAttribute("style", "border: transparent");
    }
    let positions = [];
      for (let count2 = 0; count2 < this.word.length; count2++) {
        if (this.word[count2].toUpperCase() == letter) {
          positions.push(count2);
          guessRight = true;
        }
      }
    if(guessRight == true) {
      console.log("right guess")
      for (let pos of positions){
      document.getElementById("char" + (pos + 1))!.style.color = ("black");
      this.correctGuesses++;
      }
    }
    else {
      console.log("false guess")
      falseChar();
    }

    if (this.correctGuesses == this.word.length) {
      end = true;
      console.log("You won!")
      alert("You won!")
    }
    }
  }
}

function falseChar() {
  falseChars++;
  if(falseChars>=12) {
    gameOver();
    (document.getElementById("hangmanImg") as HTMLImageElement).src = "https://raw.githubusercontent.com/forLeo/hangman/main/src/assets/gameover.svg";
    (document.getElementById("hangmanImg") as HTMLImageElement).classList.remove("blackSvg");
  }
  else {
    (document.getElementById("hangmanImg") as HTMLImageElement).src = "https://raw.githubusercontent.com/forLeo/hangman/main/src/assets/GUESS_" + falseChars + ".svg";
  }
}

function gameOver() {
  end = true;
  console.log("Game Over!")
}