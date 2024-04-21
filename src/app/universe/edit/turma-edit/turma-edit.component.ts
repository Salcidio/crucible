import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaServiceService } from '../../services/turma-service.service';
import { Turma } from '../../model/turma';

@Component({
  selector: 'app-turma-edit',
  templateUrl: './turma-edit.component.html',
  styleUrl: './turma-edit.component.css'
})
export class TurmaEditComponent {
  id: any;
  data: any;
  turma = new Turma();

  constructor(
    private route: ActivatedRoute,
    private dataService: TurmaServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getTurmaById(this.id).subscribe((res) => {
      this.data = res;
      this.turma = this.data;
    });
  }
  updateTurma() {
    this.dataService.updateData(this.id, this.turma).subscribe((res) => {
      console.log('successfull');
      this.router.navigate(['home']);
    });
  }
}
