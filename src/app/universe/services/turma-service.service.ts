import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurmaServiceService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/turma');
  }
  insertData(Data:Object){
    return this.httpClient.post('http://127.0.0.1:8000/api/turma',Data);

  }
  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/turma/'+id);

  }
  getTurmaById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/turma/'+id+'/edit');

  }
  udateData(id:any,data:object){
    return this.httpClient.patch('http://127.0.0.1:8000/api/turma/'+id,data);

  }
}

