import { Component } from '@angular/core';
import { MatriculaServiceService } from '../../../services/matricula-service.service';

@Component({
  selector: 'app-sysmatriculas',
  templateUrl: './sysmatriculas.component.html',
  styleUrl: './sysmatriculas.component.css'
})
export class SysmatriculasComponent {
  matriculas: any;

  constructor(
    private matriculaData: MatriculaServiceService,

  
  ) {
    
  }

  ngOnInit(): void {
   this.getMatriculaData()
  }


  getMatriculaData() {
    this.matriculaData.getData().subscribe((res) => {
      this.matriculas = res;
    });
  }

  
  deleteMatriculaData(id: any) {
    this.matriculaData.deleteData(id).subscribe((res) => {
      this.getMatriculaData();
    });
  }
}
