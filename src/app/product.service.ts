import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import 'rxjs'; // got to pass the test case using this import

import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: HttpClient) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
    .map(response => <Album>response);
  }
}
