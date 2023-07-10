import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCalculator';

  operations = "0";
  total = "0";
  operator = "";
  floatCounter = 0;
  operatorCounter = 0;
  vuelta = 0;

  mostrarValores(){

    console.log(" Vueltas: "+this.vuelta+" Total: "+this.total+"Operations: "+this.operations+" Float: "+this.floatCounter+" Operator: "+this.operator+
    " Operator Counter: " +this.operatorCounter);
  }
  // updateTotal(newValue: string){

  //   this.total += newValue;
  // }

  updateOperation(newValue: string){

    if(this.vuelta == 0)
    {

      this.total = "";
      this.operations = "";

      this.total += newValue;
      this.operations += newValue;
      this.vuelta++;
      this.mostrarValores();
    }else{

      this.vuelta++;
      this.operations += newValue;
      this.total += newValue;
      this.mostrarValores();
    }
  }

  getNumber(newOperator: string){

    let number = "";

    this.operatorCounter++;
    this.operator = newOperator.charAt(newOperator.length-1);
    number = newOperator.slice(0,-1);

    this.total += number;

    this.vuelta++;
    this.operatorCounter = 0;
    this.floatCounter = 0;
  }

  clearAll() {

    this.operations = "0";
    this.total = "0";
    this.operator = "";
    this.floatCounter = 0;
    this.operatorCounter = 0;
    this.vuelta = 0;
  }

  keyPressed(value: string) {

    
    this.mostrarValores();
    switch (value) {
      case '9':
        
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '8':
        
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '7':
        
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '6':
        
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '5':
      
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '4':
      
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '3':
      
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '2':
        
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '1':
        
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '.':

        if((this.floatCounter == 0)&&(this.vuelta > 0)){

          this.updateOperation(value);
          // this.updateTotal(value);

          this.floatCounter++;
          this.vuelta++;
        }
        break;
      case '0':
        
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '00':
        
        this.updateOperation(value);
        // this.updateTotal(value);
        break;
      case '/':
        
        if((this.operatorCounter == 0)&&(this.vuelta > 0)){

          this.getNumber(value);

          this.floatCounter++;
          this.vuelta++;
        }
        break;
      case 'X':

        if((this.operatorCounter == 0)&&(this.vuelta > 0)){

          this.getNumber('*');

          this.floatCounter++;
          this.vuelta++;
        }
        break;
      case '-':

        if((this.operatorCounter == 0)&&(this.vuelta > 0)){

          this.getNumber(value);

          this.floatCounter++;
          this.vuelta++;
        }
        break;
      case '+':

        if((this.operatorCounter == 0)&&(this.vuelta > 0)){

          this.getNumber(value);

        }
        break;
      case '=':
        if((this.operatorCounter == 0)&&(this.vuelta > 0)){

          this.getNumber(value);

          this.floatCounter++;
          this.vuelta++;
        }
        break;
      default:

        this.clearAll();
        break;
    }
  }
}
