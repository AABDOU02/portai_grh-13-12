import { Component, OnInit } from "@angular/core";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { Module } from "@ag-grid-community/core";
import { MiseAObejectifService } from "../mise-a-obejectif.service";
import { TokenStorage } from "src/app/core/services/token-storage.service";
import { Obejectif } from "../obejectif";
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import Swal from "sweetalert2";

@Component({
  selector: 'app-mise-a-obejectif',
  templateUrl: './mise-a-obejectif.component.html',
  styleUrls: ['./mise-a-obejectif.component.scss']
})
export class MiseAObejectifComponent implements OnInit {
[x: string]: any;
    list:any
    listObject:any
private code !: GridApi<Obejectif>
constructor(public serv :MiseAObejectifService,public token:TokenStorage) { }

  ngOnInit(): void {
    this.getListOjectif()
  }

  getListOjectif(){

    this.serv.fetchListObjectif(this.token.getUser().cod_soc,this.token.getUser().matpers)
    .subscribe(
      (data :any) =>

      {

        this.list=data
        this.code=data
        console.log("objeeeectiiiiiiiiiiiiiiiiiiiif"+this.list)


      }
    )
  }

  getListOjectifSelected(){

   
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
      width: 250,
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
      headerName: "Année",
      field: "annee",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 250,
    },
    
    {
      headerName: "Code Service",
      field: "cod_serv",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 250,
    },
    
    {
      headerName: "num_objectif",
      field: "num_objectif",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 250,
    },
  ];


  modules: Module[] = [ClientSideRowModelModule];
onCellClicked(cellData){
  console.log(cellData.value);
  this.serv.fetchListObjectifPers(this.token.getUser().cod_soc,this.token.getUser().matpers,cellData.value)
    .subscribe(
      (data :any) =>
      {
        this.listObject=null

     
        this.listObject=data
        this.code=data
        console.log("objeeeectiiiiiiiiiiiiiiiiiiiif"+this.listObject)


      }
    )

}

list1:any
//clear 
submit() { 

  this.obj = {
    cod_soc: this.token.getUser().cod_soc,
    mat_pers: this.token.getUser().matpers,
    annee:2022,
    num_objectif: this.objectif,
    lib_objectif:this.libele
  
  
  }
  console.log("init"+this.objectif+"    "+this.libele);

  this.serv.addObj(this.obj).subscribe(
    (event: any) => {
      this.objectif=''
      this.libele=''
console.log("hhhhhhhhhhhhhhhhtttt"+event)

      if (event=null) {
       
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Votre objectif à été bien enregistrer !',
            showConfirmButton: false,
            timer: 2000
          }
          
          );
        
          }
           else {
         // this.toastr.error('Echec ajout', 'Problème de suppression.');
        }
          // Short link via api response

      
  }

    );

  }





tmpo;
count = 0;
arrayOfObj = [];

obj:Obejectif ;


onAddRow(){
  
//this.listObject=null
this.tmpo=1;
this.count ++;
console.log("yytttttttttttt"+this.objectif)

if(this.count==1){
this.arrayOfObj.push(this.count);


}
if(this.count>=2){
  this.objectif=''
  this.libele=''
  console.log("init"+this.objectif+"    "+this.libele);

}

}

}
