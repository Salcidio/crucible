import { Component } from '@angular/core';
import { AlunoServiceService } from '../../../services/aluno-service.service';

@Component({
  selector: 'app-sysaluno',
  templateUrl: './sysaluno.component.html',
  styleUrl: './sysaluno.component.css'
})
export class SysalunoComponent {

  alunos: any;

  constructor(
    private alunoData: AlunoServiceService,
  
  ) {
    
  }


  ngOnInit(): void {
    this.getAlunoData()

  }

  getAlunoData() {
    this.alunoData.getData().subscribe((res) => {
      this.alunos = res;
    });
  }

  deleteAlunoData(id: any) {
    this.alunoData.deleteData(id).subscribe((res) => {
      this.getAlunoData();
    });
  }
}
