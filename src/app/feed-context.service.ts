import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeedContextService {
  data: any[] = []; // replace with your actual data type

  constructor(private http: HttpClient) {}

  getData(): any[] {
    // replace with your actual data fetching logic
    return this.data;
  }
}
