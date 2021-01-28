import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.page.html',
  styleUrls: ['./reel.page.scss'],
})
export class ReelPage implements OnInit {

  list = [];
  option = {
    loop: true,
    direction: 'vertical'
  };
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
