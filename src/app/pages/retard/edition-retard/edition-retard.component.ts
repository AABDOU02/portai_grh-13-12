import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { Module } from "@ag-grid-community/core";
import { ConsltmanagerService } from '../../competences/consltmanager.service';
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { EditionRetardService } from '../edition-retard.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-edition-retard',
  templateUrl: './edition-retard.component.html',
  styleUrls: ['./edition-retard.component.scss']
})
export class EditionRetardComponent implements OnInit {

  listOptionComp:any
  constructor(private serv :ConsltmanagerService,private serv2 :EditionRetardService,
    private token:TokenStorage,  private datePipe: DatePipe
    ) {
    
   }

  ngOnInit(): void {
    this.fectchListPers()
  }


  listObject:any
  onCellClicked(event){


   
    this.serv.getListPers(this.token.getUser().cod_soc,this.token.getUser().matpers)
    .subscribe(
      (data :any) =>
      {

        this.listObject=data


      }
    )
    }
    fectchListPers(){
     

        this.serv2.getRetard(this.token.getUser().matpers,this.token.getUser().cod_soc)
        .subscribe(
          (data1 :any) =>
          {
    
            this.listlig=data1
     
    
    
    
          })
    }
    submit(){

    }
    tmpo;
    count = 0;
    arrayOfObj = [];
onAddRow(){
  
  this.tmpo=1;
  this.count ++;
  
  if(this.count==1){
  this.arrayOfObj.push(this.count);
  
  
  }
  
  
  }
  
  date1:any;
  onGetValue() {
    const dateSendingToServer = new DatePipe('en-US').transform(this.date1, 'dd-MM-yyyy')

    this.serv2.getRetardDat(this.token.getUser().matpers,this.token.getUser().cod_soc,dateSendingToServer).subscribe(
      data => {
        this.listlig=data
  
  
      })
  
  
  }

  listlig:any
 
  modules: Module[] = [ClientSideRowModelModule];


  columnDefs1 = [
    {
      headerName: "Date",
      field: "dat_point",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 120,
    },
    {
      headerName: "Matricule",
      field: "mat_pers",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 120,
    },
    {
      headerName: "Nom et prénom",
      field: "nom_pren",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 250,
    },
    {
      headerName: "Régime",
      field: "cod_reg",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 120,
    },
    
    {
      headerName: "Numéro pointeur",
      field: "num_point",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    {
      headerName: "Pointage",
      field: "heur_min",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    {
      headerName: "Durée (M)",
      field: "duree_m",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    {
      headerName: "Durée (H)",
      field: "duree_h",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
  ];

}
