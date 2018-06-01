import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/Rx'; // got to pass the test case using this import

import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
    .map(response => <Album>(response.json()));
  }
}
