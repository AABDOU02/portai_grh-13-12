import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventApi } from '@fullcalendar/core';
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { EcheanceContratService } from '../../contrat/echeance-contrat.service';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { Module } from "@ag-grid-community/core";
import { ConsltmanagerService } from '../consltmanager.service';

@Component({
  selector: 'app-consltmanager',
  templateUrl: './consltmanager.component.html',
  styleUrls: ['./consltmanager.component.scss']
})
export class ConsltmanagerComponent implements OnInit {
  [x: string]: any;



  ngOnInit(): void {
    this.fectchListCompetence()
    this.fectchListPers()
  }

 
 

  constructor(
    
    private serv :ConsltmanagerService,
    private token:TokenStorage,
    private datePipe: DatePipe
  ) {

  }
  
  

  columnDefs = [
    {
      headerName: "Matricule",
      field: "mat_pers",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    {
      headerName: "Nom et prénom",
      field: "pren_pers",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 250,
    },
    {
      headerName: "Code soc",
      field: "cod_soc",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },
    
    {
      headerName: "Services",
      field: "cod_serv",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 250,
    },
   
  
  ];

  listObject:any
  modules: Module[] = [ClientSideRowModelModule];
fectchListCompetence(){
  this.serv.getListCompetenceReq(this.token.getUser().matpers)
    .subscribe(
      (data :any) =>
      {

        //this.listObject=data
        //console.log("competence"+this.listObject)


      }
    )
}

fectchListPers(){
  this.serv.getListPers(this.token.getUser().cod_soc,this.token.getUser().matpers)
    .subscribe(
      (data :any) =>
      {

        this.listObject=data
        console.log("competence"+this.listObject)
        this.list=data


      }
    )
}
list :any
listOptionComp :any
listNatComp :any
list2:any
valFix=1
valFix1=0

listComp:any
listReq:any
//hiding info box
visibleDiv:boolean = true
invisibleDiv:boolean =false


onCellClicked(event){


  console.log("uuuuuuuuuuuuuuu"+event)
  this.serv.getListCompetenceReqPers(this.token.getUser().matpers,event.value)
  .subscribe(
    (data1 :any) =>
    {

      console.log("teeeeeeeeeeeest f :"+this.invisibleDiv+" t " + this.visibleDiv)

      if(!data1){
      this.valFix1++
      this.invisibleDiv =!this.invisibleDiv ; //not equal to condition
      this.visibleDiv =  !this.visibleDiv
      console.log("competenceuuuuuuuuuuuuuuu"+this.valFix        )
      this.valFix1--


      }
      if(data1){
        this.valFix--

        this.invisibleDiv =!this.invisibleDiv ; //not equal to condition
    
        this.visibleDiv = !this.visibleDiv
        console.log("competenceuuuuuuuuuuuuuuu"+ data1[0]
        )
        this.list=data1[0]
        this.list2=data1
        this.listOptionComp=data1[0]
        this.listComp=data1[0]
        this.listReq=data1[0]
        this.valFix++
        this.visibleDiv =  !this.visibleDiv

        }

        else{
        console.log("fffffff")
          
        }
    }
  )


  

  this.serv.getListNatCompetence()
  .subscribe(
    (data2 :any) =>
    {

      if(data2!=null){
      console.log("naaaaaaaaaaaaaaaaaaaaaattttttttttt"+this.listNatComp)
      this.listNatComp=data2
    
    }

    

    }
  )
}



tmpo;
count = 0;
arrayOfObj = [];
onAddRow(){
  
  //this.listObject=null
  this.tmpo=1;
  this.count ++;
  console.log("yytttttttttttt"+this.list)
  
  if(this.count==1){
  this.arrayOfObj.push(this.count);
  
  
  }
  if(this.count>=2){
    this.objectif=''
    this.libele=''
    console.log("init"+this.objectif+"    "+this.libele);
  
  }
  
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  valNatComp :any

  choseNatComp(){
    console.log("init"+this.valNatComp);


  }
}
