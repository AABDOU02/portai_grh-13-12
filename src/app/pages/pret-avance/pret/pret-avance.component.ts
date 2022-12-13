import { Component, OnInit } from '@angular/core';
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { LigbsoinService } from '../../bsoin/services/ligbsoin.service';
import { PersonnelService } from '../../Employe/personnel.service';
import { OppositionserviceService } from '../../opposition/services/oppositionservice.service';
import { PretAvanceService } from '../pret-avance.service';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { Module } from '@ag-grid-community/core';
@Component({
  selector: 'app-pret-avance',
  templateUrl: './pret-avance.component.html',
  styleUrls: ['./pret-avance.component.scss']
})
export class PretAvanceComponent implements OnInit {
  [x: string]: any;
  idCessionPers:any={
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
    cod_pret: 1

  }
  idLpret:any={
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
    cod_pret: 1,
    l_pret:0

  }
  list:any;
  listpretavance:any;

  list1:any;

  data !:any;
  listPers:any;
  listlig:any;
  listL:any;
  dataL !:any;
  typ_pret:any[];
  perso11 :any = {
    cod_soc:this.token.getUser().cod_soc,
    mat_pers:this.token.getUser().matpers,
 
  }
  
    array : any;

  constructor(private serv :PretAvanceService,public token:TokenStorage, private service:PersonnelService,private serv1 : LigbsoinService ) {

  
   }

  ngOnInit() {

    this.perso11.cod_pret=this.codepret
this.getPretAvance()

 

 
    this.getgouv1()
  }
   anotherFunction(event: Event ) {
   
    if (event){
    console.log(this.listlig.l_pret)
   
    }

  }


  action(code :any){

    if (code){
      console.log(code)
      this.idLpret.l_pret=code
      console.log(this.idLpret.l_pret)

      
      this.listlig=this.list.ligPretPers
      console.log(" 1 :",this.listlig); 
      }


  }
  getCessionPerso(){
    this.serv.fetchPretAvance(this.idCessionPers).subscribe(
      
        data => {
          this.list =data;
          this.listlig=this.list.ligPretPers;
          console.log(" 1 :",this.listlig); 
                 
      },
      err => {
        console.log(err);
      }
      );

    }
    
    getPretAvance(){
      this.serv.fetchPretAvance(this.idCessionPers).subscribe(
        
          data => {
            this.listpretavance =data[0];
           this.list=data
            console.log(" 1pret et avance  :",this.listpretavance); 
                   
        },
        err => {
          console.log(err);
        }
        );
  
      }

        
  test(){
    this.idCessionPers.cod_pret=this.codepret
    this.getCessionPerso()
    console.log("test : ",this.idCessionPers.cod_pret);
  } 


getgouv1(){
  this.serv.fetchPretAvance(this.idCessionPers).subscribe(
    data1 => {
      this.array =data1;
     //this.ligbult =this.list.ligBult
    // this.array=this.list.numSoinParam

      console.log("dddd : ",this.array.listCodPret );
     
    },
    err => {
      console.log(err);
    }
    );

  }

}