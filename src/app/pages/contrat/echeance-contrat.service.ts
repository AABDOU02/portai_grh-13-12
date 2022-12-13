import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcheanceContratService {

 
  constructor(private http: HttpClient) { }

  getContrat (){

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth/getcontrat')
  
    
   }
   getListContrat (date1:any,date2:any){

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth/getlistcontrat/'+date1+'/'+date2)
  
    
   }
}
