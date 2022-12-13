import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsltmanagerService {

  constructor(private http: HttpClient) { }


  getListCompetence(matPers:any){

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth' + '/getcomptence/'+matPers)
  
    
   }
   
  getListCompetenceReq(matPers:any){

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth' + '/getcomptencereq/'+matPers)
  
    
   }

   getListCompetenceReqPers  = (matPers:any,matPersAgent :any): Observable<any[]> => {

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth' + '/getcomptencereq/'+matPers+'/'+matPersAgent)
  
    
   }
   getListNatCompetence(){

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth/getallcompetence/')
  
    
   }
   getListPers(codSoc :any,matPers:any){

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth' + '/getlispesonel/'+codSoc+'/'+matPers)
  
    
   }


}
