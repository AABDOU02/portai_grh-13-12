import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
 import { UIModule } from '../../shared/ui/ui.module';

import { AgGridModule } from '@ag-grid-community/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PretAvanceRoutingModule } from './pret-avance-routing.module';
import { PretAvanceComponent } from './pret/pret-avance.component';



@NgModule({
  declarations: [
    PretAvanceComponent
  ],
  imports: [
    CommonModule,
    UIModule,
    PretAvanceRoutingModule,
    NgbTooltipModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PretAvanceModule { }
