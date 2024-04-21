import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoServiceService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/curso');
  }
  insertData(Data:Object){
    return this.httpClient.post('http://127.0.0.1:8000/api/curso',Data);

  }
  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/curso/'+id);

  }
  getCursoById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/curso/'+id+'/edit');

  }
  updateData(id:any,data:object){
    return this.httpClient.patch('http://127.0.0.1:8000/api/curso/'+id,data);

  }
}
