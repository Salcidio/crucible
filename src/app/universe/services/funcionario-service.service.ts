import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioServiceService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/funcionario');
  }
  insertData(Data:Object){
    return this.httpClient.post('http://127.0.0.1:8000/api/funcionario',Data);

  }
  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/funcionario/'+id);

  }
  getFuncionarioById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/funcionario/'+id+'/edit');

  }
  udateData(id:any,data:object){
    return this.httpClient.patch('http://127.0.0.1:8000/api/funcionario/'+id,data);

  }
}
