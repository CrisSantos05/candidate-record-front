import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { DadosRoutingModule } from './dados-routing.module';
import { DadosComponent } from './dados/dados.component';






@NgModule({
  declarations: [
    DadosComponent
  ],
  imports: [
    CommonModule,
    DadosRoutingModule,
    AppMaterialModule,
    SharedModule


  ]
})
export class DadosModule { }
