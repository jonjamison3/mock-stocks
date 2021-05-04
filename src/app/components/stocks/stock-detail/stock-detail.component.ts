import { Component, Input } from '@angular/core';
import { Stock } from 'src/app/models/stock';


@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.scss']
})
export class StockDetailComponent {
  @Input() stock: Stock;

  constructor() { }
}
