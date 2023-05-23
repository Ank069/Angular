import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
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
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validchars = '';
    if (this.includeLetters) {
      validchars += letters;
    }
    if (this.includeNumbers) {
      validchars += numbers;
    }
    if (this.includeSymbols) {
      validchars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validchars.length);
      generatedPassword += validchars[index];
    }
    this.password = generatedPassword;
  }
}
