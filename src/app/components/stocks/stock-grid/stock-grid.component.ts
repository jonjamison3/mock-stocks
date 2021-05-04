import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { Tag } from 'src/app/models/tag';
import { StockService } from 'src/app/services/stock.service';


@Component({
  selector: 'app-stock-grid',
  templateUrl: './stock-grid.component.html',
  styleUrls: ['./stock-grid.component.scss']
})
export class StockGridComponent {
  @Input() stocks: Stock[] = [];
  @Input() tags: Tag[] = [];
  @Output() selectedStockEmitter: EventEmitter<Stock> = new EventEmitter();  
  
  displayedColumns: string[] = ['symbol', 'last_price', 'tag', 'actions'];
  selectedStock: Stock; 

  constructor(private stockService: StockService) { }

  deleteHandler(stock: Stock) {
    this.stockService.deleteStock(stock);
    if (stock === this.selectedStock) this.selectedStockEmitter.emit(null);
  }

  emitSelectedStock(stock: Stock): void {
    this.selectedStock = stock; 
    this.selectedStockEmitter.emit(stock);
  }
}
