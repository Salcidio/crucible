import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoServiceService } from '../../services/aluno-service.service';
import { Aluno } from '../../model/aluno';

@Component({
  selector: 'app-aluno-edit',
  templateUrl: './aluno-edit.component.html',
  styleUrl: './aluno-edit.component.css'
})
export class AlunoEditComponent {
  id: any;
  data: any;
  aluno = new Aluno();

  constructor(
    private route: ActivatedRoute,
    private dataService: AlunoServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getAlunoById(this.id).subscribe((res) => {
      this.data = res;
      this.aluno = this.data;
    });
  }
  updateAluno() {
    this.dataService.updateData(this.id, this.aluno).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
