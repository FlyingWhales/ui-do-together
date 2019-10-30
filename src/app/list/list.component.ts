import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';;
import { ListCreateComponent } from '../list-create/list-create.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.styl']
})
export class ListComponent implements OnInit {

  lists;
  constructor(private httpClient: HttpClient, private dialog: MatDialog) { }

  ngOnInit() {
    this.getLists().subscribe((data) => {
      this.lists = data;
    });
  }

  public getLists() {
    return this.httpClient.get(`http://localhost:8080/list/user-lists`);
  }

  public openCreateListComponent() {
   // this.dialog.open(ListCreateComponent);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ListCreateComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
