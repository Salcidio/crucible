import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrecarioServiceService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/precario');
  }
  insertData(Data:Object){
    return this.httpClient.post('http://127.0.0.1:8000/api/precario',Data);

  }
  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/precario/'+id);

  }
  getPrecarioById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/precario/'+id+'/edit');

  }
  udateData(id:any,data:object){
    return this.httpClient.patch('http://127.0.0.1:8000/api/precario/'+id,data);

  }
}
