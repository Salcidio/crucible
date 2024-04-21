import { Component } from '@angular/core';
import { ProfessorServiceService } from '../../../services/professor-service.service';

@Component({
  selector: 'app-sysprofessores',
  templateUrl: './sysprofessores.component.html',
  styleUrl: './sysprofessores.component.css',
})
export class SysprofessoresComponent {
  professores: any;

  constructor(
    private professorData: ProfessorServiceService,
  
  ) {}

  ngOnInit(): void {
    this.getProfessorData()
  }

  getProfessorData() {
    this.professorData.getData().subscribe((res) => {
      this.professores = res;
    });
  }

  deleteProfessorData(id: any) {
    this.professorData.deleteData(id).subscribe((res) => {
      this.getProfessorData();
    });
  }
}
