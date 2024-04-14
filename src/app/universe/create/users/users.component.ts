import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users:any;
  user=new User();


  
  constructor(private dataService:UserServiceService){}

  ngOnInit():void{
    this.getUserData();
  }

  getUserData(){
    this.dataService.getData().subscribe(res=>{
      this.users=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.user).subscribe(res=>{
    this.getUserData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getUserData();
})
}
}
