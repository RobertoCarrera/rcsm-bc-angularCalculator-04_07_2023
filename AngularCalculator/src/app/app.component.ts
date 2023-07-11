import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCalculator';

  operaciones = "0";
  total = "0";
  operator = '';

  inicio_num2 = 0;
  final_num2 = 0;
  numMemory = 0;

  operatorCounter = 0;
  pulsaciones = 0;

  mostrarValores(){

    console.log("Pulsaciones: "+this.pulsaciones+" Operations: "+this.operaciones+" Float counter: "+ "Total: "+this.total+" Operator Counter: "+this.operatorCounter);
  }

  keyValue(newValue: string){

    if(this.pulsaciones == 0)
    {
      this.total = '';
      this.operaciones = '';

      this.operaciones += newValue;
      this.total += newValue;
    }else{

      this.operaciones += newValue;
      this.total += newValue;
    }
  }

  getOperator(newOperator: string){

    let num = 0;
    let total = 0;

    if(this.operatorCounter == 0)
    {
      let num = this.operaciones;

      this.operator = newOperator;
      this.total = num;
      this.inicio_num2 = this.pulsaciones;
      this.numMemory = +num;
      this.operaciones += newOperator;
  
      this.operatorCounter++;
    }else{

      this.final_num2 = this.pulsaciones;
      
      num = +this.operaciones.slice(this.inicio_num2,this.final_num2);
      total = +this.total;
      alert("Num = "+num);
      alert("Total = "+total);

      total += num;

      this.total = ''+total;

    }

  }

  clearAll(){

    this.operaciones = '0';
    this.total = '0';

  }

  keyPressed(value: string) {

    console.log("Valor introducido: "+value);
    this.mostrarValores();
    switch (value) {
      case '9':
        
        this.keyValue(value);
        this.pulsaciones++;
        break;
      case '8':
        
        this.keyValue(value);
        this.pulsaciones++;
        break;
      case '7':
        
        this.keyValue(value);
        this.pulsaciones++;
        break;
      case '6':
        
        this.keyValue(value);
        this.pulsaciones++;
        break;
      case '5':
      
        this.keyValue(value);
        this.pulsaciones++;
        break;
      case '4':
      
        this.keyValue(value);
        this.pulsaciones++;
        break;
      case '3':
      
        this.keyValue(value);
        this.pulsaciones++;
        break;
      case '2':
        
        this.keyValue(value);
        this.pulsaciones++;
        break;
      case '1':
        
        this.keyValue(value);
        this.pulsaciones++;
        break;
      case '.':

        break;
      case '0':
        
        this.keyValue(value);
        break;
      case '00':
        
        this.keyValue(value);
        break;
      case '/':

        break;
      case 'X':

        break;
      case '-':

        break;
      case '+':
        this.getOperator(value);
        break;
      case '=':

        break;
      default:

        this.clearAll();
        break;
    }
  }
}
