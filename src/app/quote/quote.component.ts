import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Aluta Continua!','Do not stop working to achieve what you want.'),
    new Quote('Impossible is nothing', 'You can not be stopped!'),
    new Quote('I have a dream', 'Dream on youngblood!!')
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

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
