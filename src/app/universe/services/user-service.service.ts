import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient:HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/user');
  }

  insertData(data:object){
    return this.httpClient.post('http://127.0.0.1:8000/api/user',data);
  }
  deleteData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/user/'+id);

  }
  getUserById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/user/'+id+'/edit')
  }
  updateData(id:any,data:Object){
    return this.httpClient.patch('http://127.0.0.1:8000/api/user/'+id,data);
  }
}
