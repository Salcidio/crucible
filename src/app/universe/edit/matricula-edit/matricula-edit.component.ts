import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatriculaServiceService } from '../../services/matricula-service.service';
import { Matricula } from '../../model/matricula';

@Component({
  selector: 'app-matricula-edit',
  templateUrl: './matricula-edit.component.html',
  styleUrl: './matricula-edit.component.css'
})
export class MatriculaEditComponent {
  id: any;
  data: any;
  matricula = new Matricula();

  constructor(
    private route: ActivatedRoute,
    private dataService: MatriculaServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getMatriculaById(this.id).subscribe((res) => {
      this.data = res;
      this.matricula = this.data;
    });
  }
  updateMatricula() {
    this.dataService.updateData(this.id, this.matricula).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
