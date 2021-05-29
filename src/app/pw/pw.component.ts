import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pw',
  templateUrl: './pw.component.html',
  styleUrls: ['./pw.component.css']
})
export class PwComponent implements OnInit {

  constructor() { }

  title = 'password genarator';
  password: string = '';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  passwordlength: number = 0;

  ngOnInit(): void {
  }


  onButtonClick() {
    //console.log(`${this.includeLetters} : ${this.includeNumbers}: ${this.includeSymbols}`)
    let letters = "abcdefghijkflmnopqrstuywxz";
    let numbers = "1234567890";
    let symbols = "!@#$%^&*()"

    let validChar = "";

    if (this.includeLetters) {
      validChar += letters;
    }

    if (this.includeNumbers) {
      validChar += numbers;
    }

    if (this.includeSymbols) {
      validChar += symbols;
    }

    let generatedPAssword = "";
    for (let i = 0; i < this.passwordlength; i++) {
      const index = Math.floor(Math.random() * validChar.length);
      generatedPAssword += validChar[index];
    }

    this.password = generatedPAssword;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string) {
    this.passwordlength = Number(value);
  }

}
