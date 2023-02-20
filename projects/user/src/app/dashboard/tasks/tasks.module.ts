import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { MaterialModule } from '../../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { TaskDetailsComponent } from './components/task-details/task-details.component';


@NgModule({
  declarations: [
    ListTasksComponent,
    TaskDetailsComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    TasksRoutingModule,
    NgxPaginationModule
  ]
})
export class TasksModule { }
