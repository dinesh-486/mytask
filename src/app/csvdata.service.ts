import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';


import { Csvdata } from './csvdata';

@Injectable({
  providedIn: 'root'
})
export class CsvdataService {
  baseUrl = 'http://localhost';

  constructor(private http: HttpClient) {}

  store(csvdata: any) {
    return this.http.post(`${this.baseUrl}/add.php`, { data: [csvdata] }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  update(csvdata: any) {
    return this.http.post(`${this.baseUrl}/update.php`, { data: [csvdata] }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getAll() {
    return this.http.get(`${this.baseUrl}`).pipe(
      map((res: any) => {
        
        return res;
      })
    );
  }
  delete(id: any) {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete.php`, { params: params });
  }
}
