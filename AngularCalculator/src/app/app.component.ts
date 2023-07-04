import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCalculator';

  operations = "0";
  total = 0;

  updateTotal(value: string){

    this.total += this.total;
  }

  keyPressed(value: string) {

    switch (value) {
      case '9':
        
        break;
      case '8':
        
        break;
      case '7':
        
        break;
      case '6':
        
        break;
      case '5':
        
        break;
      case '4':
        
        break;
      case '3':
        
        break;
      case '2':
        
        break;
      case '1':
        
        break;
    
      default:
        break;
    }
  }
}
