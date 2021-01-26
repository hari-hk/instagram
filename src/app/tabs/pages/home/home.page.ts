import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  list = [];
  page = 1;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.getImageList();
  }
  getImageList(loading?: any): void {
    this.api.getImageList({ page: this.page, limit: 10 }).subscribe(val => {
      val.forEach(element => {
        this.list.push(element);
      });
      if (loading) {
        loading.target.complete();

      }
    });
  }


  loadData(event) {
    this.page++;
    if (this.list.length === 1000) {
      event.target.disabled = true;
    }
    this.getImageList(event);
  }
  doRefresh(event) {
    this.page = 1;
    this.list = [];
    this.getImageList(event);
  }
}
