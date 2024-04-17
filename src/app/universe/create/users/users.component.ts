import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users:any;
  user=new User();


  
  constructor(private dataService:UserServiceService,private router:Router){}

  ngOnInit():void{
  
  }

  getUserData(){
    this.dataService.getData().subscribe(res=>{
      this.users=res;

    })
  }

 insertData(){
  console.log(this.user)
  this.dataService.insertData(this.user).subscribe(res=>{
    this.getUserData();
   this.router.navigate(['home']);
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getUserData();
})
}
}
