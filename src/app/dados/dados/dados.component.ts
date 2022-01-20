import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Dado } from './../model/dado';
import { DadosService } from './../services/dados.service';



@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {

  dados$: Observable <Dado[]>;
  displayedColumns = ['name','category'];

 // dadosService: DadosService;

  constructor(
    private dadosService: DadosService,
    public dialog: MatDialog
    ) {
    //this.dadosService = new DadosService();
    this.dados$ = this.dadosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar dados.');
        return of([])
      })
    );
  }

  onError(errorMSG: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMSG

    });
  }

  ngOnInit(): void {

  }

}
function DialogDataExampleDialog(DialogDataExampleDialog: any, arg1: { data: { animal: string; }; }) {
  throw new Error('Function not implemented.');
}

