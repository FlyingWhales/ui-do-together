import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {

  lists;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getLists().subscribe((data) => {
      this.lists = data;
    });
  }

  public getLists() {
    return this.httpClient.get(`http://localhost:8080/list/user-lists`);
  }

}
