import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'Aluta Continua!','Do not stop working to achieve what you want.'),
    new Quote(2, 'Impossible is nothing', 'You can not be stopped!'),
    new Quote(3, 'I have a dream', 'Dream on youngblood!!')
  ];

  toggleDetails(index:number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete: any, index:number){
    if (isComplete) {
      let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].name}?');

      if (toDelete) {
        this.quotes.splice(index,1);
      }
      
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
