import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { Tag } from 'src/app/models/tag';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  selectedStock: Stock;
  stocks: Stock[] = []; 
  tags: Tag[] = []; 

  constructor(private stockService: StockService) { }

  ngOnInit(): void {

    this.stockService.getStocks().subscribe(stocks => {
      // console.log('init stocks', stocks);
    });

    this.stockService.getTags().subscribe(tags => {
      // console.log('init tags', tags);
    });

    this.stockService.currStocks$.subscribe(stocks => this.stocks = stocks); 
    this.stockService.tags$.subscribe(tags => this.tags = tags); 
  }
  
  clearFilter(): void {
    this.stockService.resetStocks();
  }

  selectedStockHandler(stock: Stock): void {
    this.selectedStock = stock; 
  }

  selectedTagHandler(tag): void {
    if (tag !== undefined) {
      this.stockService.filterByTag(tag)
    } else {
      this.stockService.resetStocks()
    };

  }
}
