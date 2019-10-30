import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.styl']
})

export class ListCreateComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public saveList(listName: any) {
    this.http.post<boolean>('http://localhost:8080/list/save-list', { listname: listName }).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );

  }

}
