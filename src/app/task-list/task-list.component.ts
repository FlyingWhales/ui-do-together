import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.styl']
})
export class TaskListComponent implements OnInit {
  listid = '';
  tasks;
  dataAvailable = false;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.listid = params.get('id');
      this.getTasks().subscribe((data) => {
        this.tasks = data;
        if (this.tasks.length > 0) {
          this.dataAvailable = true;
        }

      });
    });
  }

  public getTasks() {
    return this.httpClient.get(`http://localhost:8080/task-list/list-tasks/` + this.listid);
  }
}
