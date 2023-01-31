import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineitemComponent } from './wine-item/wine-item.component';
import { WineNewComponent } from './wine-new/wine-new.component';
import { WinelistComponent } from './wine-list/wine-list.component';
import { WineDetailsComponent } from './wine-details/wine-details.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { WineRoutingModule } from './wine-routing.module';
import { ImageNotNullPipe } from '../Pipes/imageNotNullPipe';


@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    WineRoutingModule
  ],
  declarations: [
    WineDetailsComponent,
    ImageNotNullPipe,
    WineitemComponent,
    WinelistComponent,
    WineNewComponent
  ]
})
export class WineModule { }
