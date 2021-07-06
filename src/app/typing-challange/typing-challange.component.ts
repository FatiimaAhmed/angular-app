import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-challange',
  templateUrl: './typing-challange.component.html',
  styleUrls: ['./typing-challange.component.css']
})
export class TypingChallangeComponent implements OnInit {
  @Input() sentence = "";
  enteredText: string = "";
  wrong: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.enteredText = value;
  }

  compare(letter: string, text: string) {
    let className = "";
    if (text) {
      if (letter == text) {
        className = "correct";
      } else if (letter !== text) {
        className = "not-correct";
      }
    }

    return className;
  }
}
