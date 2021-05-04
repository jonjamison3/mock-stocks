import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../models/stock';
import { tap } from 'rxjs/operators';

const api_url = 'http://localhost:3000';

import { BehaviorSubject, Observable } from 'rxjs';
import { Tag } from '../models/tag';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  allStocks: BehaviorSubject<Stock[]> = new BehaviorSubject([]);
  allStocks$: Observable<Stock[]> = this.allStocks.asObservable();

  currStocks: BehaviorSubject<Stock[]> = new BehaviorSubject([]);
  currStocks$: Observable<Stock[]> = this.currStocks.asObservable();

  tags: BehaviorSubject<Tag[]> = new BehaviorSubject([]);
  tags$: Observable<Tag[]> = this.tags.asObservable();

  mockDeleted: Stock[] = []; 

  constructor(public http: HttpClient) { }

  clearFilter(): void {
    this.currStocks.next(this.allStocks.getValue().filter(stock => {
      return this.mockDeleted.indexOf(stock) === -1
    }));
  }

  filterByTag(tag: Tag): void {
    this.currStocks.next(this.allStocks.getValue().filter(existing => {
      return this.mockDeleted.indexOf(existing) === -1 && (existing.tag.id === tag.id)
    }))
  }

  getStocks() {
    return this.http.get<Stock[]>(api_url + '/stocks').pipe(
      tap(ev => {
        this.allStocks.next(ev)
        this.currStocks.next(ev)
      })
    );
  }

  getTags() {
    return this.http.get<Tag[]>(api_url + '/tags').pipe(
      tap(ev => {
        this.tags.next(ev)
      })
    );
  }

  deleteStock(stock: Stock) {
    this.mockDeleted.push(stock);
    this.currStocks.next(this.currStocks.getValue().filter(curr => curr !== stock));
  }

  resetStocks(includeDeleted = false) {
    this.mockDeleted = includeDeleted ?  [] : this.mockDeleted;
    this.currStocks.next(this.allStocks.getValue().filter(stock => this.mockDeleted.indexOf(stock) === -1));
  }
}
