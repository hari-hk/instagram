import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  list = [];
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.getSearchList();
  }
  getSearchList() {
    this.api.getImageList({ page: 20, limit: 20 }).subscribe(result => {
      this.list = result;
    });
  }

}
