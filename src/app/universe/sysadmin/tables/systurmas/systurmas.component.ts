import { Component } from '@angular/core';
import { TurmaServiceService } from '../../../services/turma-service.service';

@Component({
  selector: 'app-systurmas',
  templateUrl: './systurmas.component.html',
  styleUrl: './systurmas.component.css'
})
export class SysturmasComponent {

  turmas: any;
  constructor(
  
    private turmaData: TurmaServiceService,
  
  ) {
    
  }

  ngOnInit(): void {
   this.getTurmaData()
  }


  getTurmaData() {
    this.turmaData.getData().subscribe((res) => {
      this.turmas = res;
    });
  }

  deleteTurmaData(id: any) {
    this.turmaData.deleteData(id).subscribe((res) => {
      this.getTurmaData();
    });
  }

}
