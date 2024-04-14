import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncarregadoServiceService {

  
  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/encarregado');
  }
  insertData(Data:Object){
    return this.httpClient.post('http://127.0.0.1:8000/api/encarregado',Data);

  }
  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/encarregado/'+id);

  }
  getEncarregadoById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/encarregado/'+id+'/edit');

  }
  udateData(id:any,data:object){
    return this.httpClient.patch('http://127.0.0.1:8000/api/encarregado/'+id,data);

  }
}