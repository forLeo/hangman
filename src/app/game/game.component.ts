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
  public word!: string;
  ngOnInit() {
    this.word = wordsService.getRandomWord();
    console.log(this.word)
    for (let count = 0; count < this.word.length; count++) {
      let p = document.createElement('p');
      p.textContent = this.word[count];
      p.setAttribute('id', 'char' + (count + 1));
      document.getElementById("wordSearched")!.appendChild(p);
      document.getElementById("wordSearched")!.style.color = "transparent";
    }
  }

  letterClicked(event: any) : void {
    let id = event.target.id;
    let letter = String.fromCharCode(parseInt(id) + 64);
    console.log(id);
    let element = document.getElementById(id);
    if (element != null)
    {
      element.style.color = "rgb(196, 196, 196)";
      element.setAttribute("style", "border: transparent");
    }
    if(this.word.split("").includes(letter)) {
      console.log("right guess")
    }
    else {
      falseChar();
      console.log("false guess")
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