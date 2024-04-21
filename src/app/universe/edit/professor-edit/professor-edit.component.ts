import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorServiceService } from '../../services/professor-service.service';
import { Professor } from '../../model/professor';

@Component({
  selector: 'app-professor-edit',
  templateUrl: './professor-edit.component.html',
  styleUrl: './professor-edit.component.css'
})
export class ProfessorEditComponent {
  id: any;
  data: any;
  professor = new Professor();

  constructor(
    private route: ActivatedRoute,
    private dataService: ProfessorServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getProfessorById(this.id).subscribe((res) => {
      this.data = res;
      this.professor = this.data;
    });
  }
  updateProfessor() {
    this.dataService.updateData(this.id, this.professor).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
