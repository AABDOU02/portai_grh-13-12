import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorage } from 'src/app/core/services/token-storage.service';
import { Obejectif } from './obejectif';

@Injectable({
  providedIn: 'root'
})
export class MiseAObejectifService {


  constructor(private http: HttpClient) { }


  fetchListObjectif(codSoc : any ,matPers:any){

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth' + '/getobjmanager/'+codSoc+"/"+matPers)
  
    
   }
   
  fetchListObjectifPers(codSoc : any ,matPers:any,matPersAg :any){

    return this.http.get<any[]>('http://192.168.2.93:8080/api/auth' + '/getobjectifag/'+codSoc+"/"+matPers+"/"+matPersAg)
  
    
   }
   addObj(obj : any){

  return   this.http.post<any[]>('http://192.168.2.93:8080/api/auth/addobj',obj)
  
    
   }
}
