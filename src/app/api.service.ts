import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Quote } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getQuotes():Observable<Quote>{
    return this.http.get<Quote>("https://api.kanye.rest/")
  }
}
