import { Component } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-sysusers',
  templateUrl: './sysusers.component.html',
  styleUrl: './sysusers.component.css'
})
export class SysusersComponent {
  img1:string='assets/images/Zinzu Chan Lee.jpg'

  users: any;

  constructor(
    private userData: UserServiceService,
  
  ) {
    
  }


  ngOnInit(): void {
    this.getUserData()

  }

  getUserData() {
    this.userData.getData().subscribe((res) => {
      this.users = res;
    });
  }

  deleteUserData(id: any) {
    this.userData.deleteData(id).subscribe((res) => {
      this.getUserData();
    });
  }
}
