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
    // for (let index = 0; index < this.sentence.length; index++) {
    //   if(this.sentence[index] == this.enteredText[index]) {
    //     this.wrong = false;
    //   } else {
    //     this.wrong = true;
    //     console.log('wrong')
    //   }
    // }
  }

}
