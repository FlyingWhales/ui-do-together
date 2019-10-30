import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCreateComponent } from './list-create/list-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    ListComponent,
    ListCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {

}
