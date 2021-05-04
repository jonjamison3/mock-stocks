import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StockGridComponent } from './components/stocks/stock-grid/stock-grid.component';
import { StockDetailComponent } from './components/stocks/stock-detail/stock-detail.component';
import { StocksComponent } from './components/stocks/stocks.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { TagFilterComponent } from './components/tag-filter/tag-filter.component';
import { MarketCapPipe } from './pipes/market-cap.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StockGridComponent,
    StockDetailComponent,
    StocksComponent,
    TagFilterComponent,
    MarketCapPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
