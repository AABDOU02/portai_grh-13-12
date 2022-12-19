import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

const AUTH_API = 'http://192.168.2.93:8080';


@Injectable({
  providedIn: 'root'
})
export class LigbsoinService {
  id!: any;

  constructor(private http: HttpClient) {

  
   }


 
   bultSoinDet(codSoc : any ,matPers:any,numSoins:any){

    return this.http.get<any[]>(AUTH_API + '/api/bsoindet/'+codSoc+"/"+matPers+'/'+numSoins)
  
   }
   
   fetchListCodPret(codSoc : any ,matPers:any){

    return this.http.get<any[]>(AUTH_API + '/api/getbultsoinscode/'+codSoc+"/"+matPers)
  
    
   }
   fetchListBulletSoin(codSoc : any ,matPers:any){

    return this.http.get<any[]>(AUTH_API + '/api/getbultlist/'+codSoc+'/'+matPers)
  
    
   }

   fetchListBulletSoinStar(codSoc : any ,matPers:any){

    return this.http.get<any[]>(AUTH_API + '/api/getbultsoinstar/'+matPers+"/"+codSoc)
  
    
   }

   fetchLigBulletSoinStar(codSoc : any ,matPers:any){

    return this.http.get<any[]>(AUTH_API + '/api/getligbultstarlist/'+codSoc+"/"+matPers)
  
    
   }
   fetchLigbultStarDetList(codSoc : any ,matPers:any,numSoin:any){

    return this.http.get<any[]>(AUTH_API + '/api/getligbultstardetlist/'+codSoc+"/"+matPers+'/'+numSoin)
  
    
   }
}
