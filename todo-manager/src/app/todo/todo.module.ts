import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { NavComponent } from '../common/nav/nav.component';
import { CommonComponentsModule } from '../common/common.module';
import { ItemComponent } from './list/item/item.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    CommonComponentsModule
  ]
})
export class TodoModule { }
