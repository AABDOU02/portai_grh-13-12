import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditionRetardService {

  constructor(private http: HttpClient) { }


  getRetard  = (matPers:any,codSoc :any): Observable<any[]> => {

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth' + '/getretard/'+ matPers+'/'+ codSoc);
  
    
   }

   getRetardDet  = (matPers:any,codSoc :any,matPersAgent:any): Observable<any[]> => {

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth' + '/getretard/'+ matPers+'/'+ codSoc +'/' +matPersAgent);
  
    
   }
   
   getRetardDat  = (matPers:any,codSoc :any,dateSelect:any): Observable<any[]> => {

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth' + '/getretarddate/'+ matPers+'/'+ codSoc +'/' +dateSelect);
  
    
   }
}
