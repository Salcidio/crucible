import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  id: any;
  data: any;
  user = new User();

  constructor(
    private route: ActivatedRoute,
    private dataService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getUserById(this.id).subscribe((res) => {
      this.data = res;
      this.user = this.data;
    });
  }
  updateUser() {
    this.dataService.updateData(this.id, this.user).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
