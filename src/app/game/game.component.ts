import { Component } from '@angular/core';

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
  }
}