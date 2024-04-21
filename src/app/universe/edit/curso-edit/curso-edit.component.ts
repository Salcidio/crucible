import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoServiceService } from '../../services/curso-service.service';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrl: './curso-edit.component.css'
})
export class CursoEditComponent {
  id: any;
  data: any;
  curso = new Curso();

  constructor(
    private route: ActivatedRoute,
    private dataService: CursoServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getCursoById(this.id).subscribe((res) => {
      this.data = res;
      this.curso = this.data;
    });
  }
  updateCurso() {
    this.dataService.updateData(this.id, this.curso).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
