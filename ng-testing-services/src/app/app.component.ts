import { Component } from '@angular/core';

import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-testing-services';


  ngOnInit(){
    const calculator = new Calculator();
    const rta = calculator.multiply(1,4);
    const rta1 = calculator.divide(1,4);

    console.log(rta === 4);
    console.log(rta1 === 0);
  }
}
