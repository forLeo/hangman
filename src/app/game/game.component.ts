import { Component } from '@angular/core';
import { WordsService } from "../words.service"

let wordsService = new WordsService();

let falseChars = 0;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  letterClicked(event: any) : void {
    let id = event.target.id;
    console.log(id);
    let element = document.getElementById(id);
    if (element != null)
    {
      element.style.color = "rgb(196, 196, 196)";
      element.setAttribute("style", "border: transparent");
    }
    falseChar();
  }

  ngOnInit() {
    let word =  wordsService.getRandomWord();
    console.log(word)
    for (let count = 0; count < word.length; count++) {
      document.getElementById("wordSearched")!.appendChild(document.createElement("p")).textContent = word[count];
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
  console.log("Game Over!")
}