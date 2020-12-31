import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) { }

  getAllCats(): Observable<Cat[]>{
    return this.http.get<Cat[]>('https://api.thecatapi.com/v1/breeds');
  }

  getCatById(id: string): Observable<Cat>{
    return this.http.get<Cat>('https://api.thecatapi.com/v1/images/search?breed_ids=' + id);
  }
}
