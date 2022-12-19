import { Component, OnInit } from '@angular/core';
import { LigbsoinService } from '../services/ligbsoin.service';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { Module } from '@ag-grid-community/core';
import { TokenStorage } from 'src/app/core/services/token-storage.service';

@Component({
  selector: 'app-bsoin',
  templateUrl: './bsoin.component.html',
  styleUrls: ['./bsoin.component.scss']
})
export class BsoinComponent implements OnInit {
  data !: [];
  
  array : any;
  list:any;
  list1:any=[];
    mat!:any
    datesoin:any;
    numsoins: any;
  //idBsoin !: Idbsoin;
  idbesoin:any = {
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
    num_soins:6
  }
valoption:any;
  ligbult:any
/*
    this.idbesoin.mat_pers=this.token.getUser().matpers
    console.log("teeeeeeeeee"+this.token.getUser().matpers)*/
  
  constructor(private serv : LigbsoinService,private token:TokenStorage) { }

  ngOnInit() {

   this.mat=this.token.getUser().matpers
    this.idbesoin.num_soins=this.numsoins
    this.getgouv1();
    this.getListBulltin()

  }


  test(){
    this.idbesoin.num_soins=this.numsoins
   // this.getgouv();
    console.log("test : ",this.numsoins);
  } 


listBultSoin :any
listLigBultStart:any
BultStart:any
  getListBulltin(){

    
    this.serv.fetchListBulletSoin(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
      dataBult => {

        this.listBultSoin=dataBult
       console.log("dddd : ",dataBult);


      },);

      
          
     
        this.serv.fetchListBulletSoinStar(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
          dataBultS => {
    
            this.BultStart=dataBultS
           console.log("dddd3 : ",dataBultS);
    
    
          },);
  }


  /* getgouv(){
    
    this.serv.bultSoinDet(this.idbesoin).subscribe(
      data => {
     
     //  this.array=this.list.numSoinParam
      // console.log("dddd : ",this.array );


       
      },
      err => {
        console.log(err);
      }
      );

    } */
    getgouv1(){
      this.serv.fetchListCodPret(this.token.getUser().cod_soc,this.token.getUser().matpers).subscribe(
        data1 => {
          this.array =data1;
         //this.ligbult =this.list.ligBult
        // this.array=this.list.numSoinParam

          console.log("dddd : ",this.array );
         
        },
        err => {
          console.log(err);
        }
        );
  
      }


      onChange($event: any) {
        let text = $event.target.options[$event.target.options.selectedIndex].text;
    
        this.valoption.patchValue({ labelText: text });
    
        console.log(text);
      }


      
      columnAutorisation = [
        { headerName: "Numéro bord", 
        field: "num_bord", 
        editable: true,
        floatingFilter: true,   
           filter:true,
    
      },
      { headerName: "Numéro soins", 
        field: "num_soins", 
        editable: true,
        floatingFilter: true,   
           filter:true,
    
      },
        {
         headerName:"Date Soin",
          field: "dat_soins",
          filter: "agDateColumnFilter",
          sortable:true,
          floatingFilter: true,
          filterParams: {
            // provide comparator function
            comparator: function (filterLocalDateAtMidnight: any, cellValue: any) {
              var dateAsString = cellValue;
    
              if (dateAsString == null) {
                return 0;
              }
    
              // In the example application, dates are stored as dd/mm/yyyy
              // We create a Date object for comparison against the filter date
              var dateParts = dateAsString.split("/");
              var year = Number(dateParts[2]);
              var month = Number(dateParts[1]) - 1;
              var day = Number(dateParts[0]);
              var cellDate = new Date(year, month, day);
    
              // Now that both parameters are Date objects, we can compare
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              } else if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
              return 0;
            },
          },
          editable: true,
          cellEditor: "primeCellEditor",
        },
        

      {
        headerName: "Type parent ",
        field: "typ_parent",
        editable: true,
        floatingFilter: true,
    
        
      },
    
        {
          headerName: "Etat bulletin",
          field: "etat_bult",
          editable: true,
          filter:true,
          floatingFilter: true,
    
        },
    
        {
          headerName: "nature_bs",
          field: "nature_bs",
          editable: true,
          floatingFilter: true,
    
          
        },
    
    
        {
          headerName: "tot_honor",
          field: "tot_honor",
          editable: true,
          floatingFilter: true,
    
          
        },
        {
          headerName: "Date saisie",
          field: "dat_saisie",
          editable: true,
          floatingFilter: true,
    
          
        },
        {
          headerName: "num_ass",
          field: "num_ass",
         // cellRenderer: this.createHyperLink.bind(this),
    
          editable: true,
          floatingFilter: true,
    
          
        },
      ];
      modules: Module[] = [ClientSideRowModelModule];
      defaultColDef = {
        sortable: true,
        filter: true,
      };

      
      columnligbult = [
        { headerName: "Numéro Lig", 
        field: "num_lig", 
        editable: true,
        floatingFilter: true,   
           filter:true,
    
      },
  
    {
      headerName: "Libellé Acte",
      field: "libcact",
      editable: true,
      floatingFilter: true,

      
    },
      {headerName: "Année", 
        field: "annee_envoi", 
        editable: true,
        floatingFilter: true,   
           filter:true,
    
      },
      
        {
         headerName:"Date soins",
          field: "dat_soins",
          filter: "agDateColumnFilter",
          sortable:true,
          floatingFilter: true,
          filterParams: {
            // provide comparator function
            comparator: function (filterLocalDateAtMidnight: any, cellValue: any) {
              var dateAsString = cellValue;
    
              if (dateAsString == null) {
                return 0;
              }
    
              // In the example application, dates are stored as dd/mm/yyyy
              // We create a Date object for comparison against the filter date
              var dateParts = dateAsString.split("/");
              var year = Number(dateParts[2]);
              var month = Number(dateParts[1]) - 1;
              var day = Number(dateParts[0]);
              var cellDate = new Date(year, month, day);
    
              // Now that both parameters are Date objects, we can compare
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              } else if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
              return 0;
            },
          },
          editable: true,
          cellEditor: "primeCellEditor",
        },
        

      {
        headerName: "Type Act ",
        field: "type_act",
        editable: true,
        floatingFilter: true,
    
        
      },
    
        {
          headerName: "abrv_act",
          field: "abrv_act",
          editable: true,
          filter:true,
          floatingFilter: true,
    
        },
    
        {
          headerName: "Totale net",
          field: "tot_net",
          editable: true,
          floatingFilter: true,
    
          
        },
        {
          headerName: "Totale honor",
          field: "tot_honor",
          editable: true,
          floatingFilter: true,
    
          
        },  {
          headerName: "Date Acte",
          field: "dat_acte",
          editable: true,
          floatingFilter: true,
    
          
        },
      {
          headerName: "Libellé org",
          field: "liborg",
          editable: true,
          floatingFilter: true,
    
          
        },
       
      ];

      columnBultStar = [
        { headerName: "Numéro bord", 
        field: "num_bord_assur", 
        editable: true,
        floatingFilter: true,   
           filter:true,
    
      },
      { headerName: "Numéro Bulletin", 
      field: "num_bult", 
      editable: true,
      floatingFilter: true,   
         filter:true,
  
    },
      { headerName: "Année Bord", 
        field: "annee_bord", 
        editable: true,
        floatingFilter: true,   
           filter:true,
    
      },
      
        {
         headerName:"Date Soin star",
          field: "dat_soins_star",
          filter: "agDateColumnFilter",
          sortable:true,
          floatingFilter: true,
          filterParams: {
            // provide comparator function
            comparator: function (filterLocalDateAtMidnight: any, cellValue: any) {
              var dateAsString = cellValue;
    
              if (dateAsString == null) {
                return 0;
              }
    
              // In the example application, dates are stored as dd/mm/yyyy
              // We create a Date object for comparison against the filter date
              var dateParts = dateAsString.split("/");
              var year = Number(dateParts[2]);
              var month = Number(dateParts[1]) - 1;
              var day = Number(dateParts[0]);
              var cellDate = new Date(year, month, day);
    
              // Now that both parameters are Date objects, we can compare
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              } else if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
              return 0;
            },
          },
          editable: true,
          cellEditor: "primeCellEditor",
        },
        
        {
          headerName:"Date Soin BCT",
           field: "dat_soins_bct",
           filter: "agDateColumnFilter",
           sortable:true,
           floatingFilter: true,
           filterParams: {
             // provide comparator function
             comparator: function (filterLocalDateAtMidnight: any, cellValue: any) {
               var dateAsString = cellValue;
     
               if (dateAsString == null) {
                 return 0;
               }
     
               // In the example application, dates are stored as dd/mm/yyyy
               // We create a Date object for comparison against the filter date
               var dateParts = dateAsString.split("/");
               var year = Number(dateParts[2]);
               var month = Number(dateParts[1]) - 1;
               var day = Number(dateParts[0]);
               var cellDate = new Date(year, month, day);
     
               // Now that both parameters are Date objects, we can compare
               if (cellDate < filterLocalDateAtMidnight) {
                 return -1;
               } else if (cellDate > filterLocalDateAtMidnight) {
                 return 1;
               }
               return 0;
             },
           },
           editable: true,
           cellEditor: "primeCellEditor",
         },
      {
        headerName: "Totale honor Star ",
        field: "tot_honor_star",
        editable: true,
        floatingFilter: true,
    
        
      },
    
        {
          headerName: "Totale honor BCT",
          field: "tot_honor_bct",
          editable: true,
          filter:true,
          floatingFilter: true,
    
        },
    
        {
          headerName: "Totale remboursé Star",
          field: "tot_remb_star",
          editable: true,
          floatingFilter: true,
    
          
        },
    
    
        {
          headerName: "Totale A remboursé Bct",
          field: "tot_a_remb_bct",
          editable: true,
          floatingFilter: true,
    
          
        },
        {
          headerName: "Montant remboursé avant",
          field: "mnt_remb_avant",
          editable: true,
          floatingFilter: true,
    
          
        },
        
      ];
      columnLigBultStar = [
        {
          headerName: "Numéro Bulletin",
          field: "num_lig_bord",
          editable: true,
          floatingFilter: true,
      
          
        },
        { headerName: "Numéro bord", 
        field: "num_bord_assur", 
        editable: true,
        floatingFilter: true,   
           filter:true,
    
      },
      { headerName: "Année bord", 
      field: "annee_bord", 
      editable: true,
      floatingFilter: true,   
         filter:true,
  
    },
      {headerName: "Numéro assuré", 
        field: "num_ass", 
        editable: true,
        floatingFilter: true,   
           filter:true,
    
      },
      
        {
         headerName:"Date soins",
          field: "dat_soins_star",
          filter: "agDateColumnFilter",
          sortable:true,
          floatingFilter: true,
          filterParams: {
            // provide comparator function
            comparator: function (filterLocalDateAtMidnight: any, cellValue: any) {
              var dateAsString = cellValue;
    
              if (dateAsString == null) {
                return 0;
              }
    
              // In the example application, dates are stored as dd/mm/yyyy
              // We create a Date object for comparison against the filter date
              var dateParts = dateAsString.split("/");
              var year = Number(dateParts[2]);
              var month = Number(dateParts[1]) - 1;
              var day = Number(dateParts[0]);
              var cellDate = new Date(year, month, day);
    
              // Now that both parameters are Date objects, we can compare
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              } else if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              }
              return 0;
            },
          },
          editable: true,
          cellEditor: "primeCellEditor",
        },
        

      
    
        {
          headerName: "Totale honor Star",
          field: "tot_honor_star",
          editable: true,
          filter:true,
          floatingFilter: true,
    
        },
    
        {
          headerName: "Totale honor BCT",
          field: "tot_honor_bct",
          editable: true,
          floatingFilter: true,
    
          
        },
    
        {
          headerName: "Totale remboursé Star",
          field: "tot_remb_star",
          editable: true,
          floatingFilter: true,
    
          
        },
        {
          headerName: "Totrale A remboursé BCT",
          field: "tot_a_remb_bct",
          editable: true,
          floatingFilter: true,
    
          
        },
       
      ];

      gridColumnApi:any
      gridApi:any
      onCellClicked(event){

        this.idbesoin.num_soins=event.value
        this.serv.bultSoinDet(this.idbesoin.cod_soc,this.idbesoin.mat_pers,this.idbesoin.num_soins)
        .subscribe( dat =>
          {
            this.gridApi =dat
            console.log('tttttttttttttttttttttt'+ this.gridApi)

          },   
        err => {
          console.log(err);
        }
        );
}


onCellClickedLigStar(event){


  this.serv.fetchLigbultStarDetList(this.token.getUser().cod_soc,this.token.getUser().matpers,event.value).subscribe(
    dataBultS => {

      this.listLigBultStart=dataBultS
     console.log("dddd2 : ",dataBultS);


    },);

}
}