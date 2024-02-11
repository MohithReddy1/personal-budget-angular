import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/budget';
  private budgetData: any[] = [];
  private isDataLoaded: boolean = false;

  constructor(private http: HttpClient) { }

  getBudgetData(): Observable<any> {
    if (this.isBudgetDataEmpty()) {
      return this.http.get(this.apiUrl);
    } else {
      return new Observable(observer => {
        observer.next(this.budgetData);
        observer.complete();
      });
    }
  }

  setBudgetData(data: any[]): void {
    this.budgetData = data;
    this.isDataLoaded = true;
  }

  getStoredBudgetData(): any[] {
    return this.budgetData;
  }

  isBudgetDataEmpty(): boolean {
    return !this.isDataLoaded || this.budgetData.length === 0;
  }
}
