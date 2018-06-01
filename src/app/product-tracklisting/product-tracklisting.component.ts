import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
trackingList: any;
albumInfo: Album;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.trackingList = this._productService.getAlbum(1)
    .subscribe(response =>  this.albumInfo = response);
  }

}
