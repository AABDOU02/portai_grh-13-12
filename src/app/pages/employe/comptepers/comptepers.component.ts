import { Component, OnInit } from '@angular/core';
import { GridApi } from "ag-grid-community";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { Module } from "@ag-grid-community/core";
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { ComptepersService } from '../comptepers.service';
@Component({
  selector: 'app-comptepers',
  templateUrl: './comptepers.component.html',
  styleUrls: ['./comptepers.component.scss']
})
export class ComptepersComponent implements OnInit {
  x:any
  list:any=[]

  title = "grid";
  api!: GridApi;
  rowData: any[] = [];

  constructor(private serv: ComptepersService,private tokenService:TokenStorage) {
    
  }
  columnDefs = [
    {
      headerName: "code type bulletin",
      field: "cod_typ_bul",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },
    {
      headerName: "Compte banque personnel",
      field: "cpt_banq_pers",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 230,
    },
    
    
    {
      headerName: "Libellé bulletin",
      field: "lib_bul",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
      
     
    },
    {
      headerName: "Code Banque",
      field: "cod_banq",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 170,
      
     
    },
    
   

   

    {
      field: "dat_dom",
      headerName: "date domiciliation",
      filter: "agDateColumnFilter",
      resizable: true,
      width: 180,
      sortable: true,
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
      headerName: "libellé banque",
      field: "lib_banq",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      enableRowGroup: true,
      width: 180,
      

     
    },
    {
      headerName: "code agence",
      field: "cod_agc",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 150,
    },{
      headerName: "code banque sociale",
      field: "cod_banq_soc",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 180,
    },



    


    

    {
      headerName: "code agence sociale",
      field: "cod_agc_soc",
      editable: true,
      resizable: true,
      sortable: true,
      filter: true,
      floatingFilter: true,
      width: 200,
    },

  ];

  ngOnInit() {
    this.GetConge();
    this.GetConge22()
  }
  defaultColDef = {
    sortable: true,
    filter: true,
  };
  /* getFacture() {
    this.factureService.GetChambreByCode().subscribe(
      (data: any[]) => {
        this.rowData = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
 */
  GetConge() {
    this.serv.getEnfant(this.tokenService.getUser().cod_soc,this.tokenService.getUser().matpers,this.x).subscribe(
      (data: any[]) => {
        this.rowData = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  GetConge22() {
    this.serv.getall().subscribe(
      (data: any[]) => {
        this.list = data;

        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

  public onQuickFilterChanged($event: any) {
    this.api.setQuickFilter($event.target.value);
}

  modules: Module[] = [ClientSideRowModelModule];
}
