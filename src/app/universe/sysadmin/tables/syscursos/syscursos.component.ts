import { Component } from '@angular/core';
import { CursoServiceService } from '../../../services/curso-service.service';

@Component({
  selector: 'app-syscursos',
  templateUrl: './syscursos.component.html',
  styleUrl: './syscursos.component.css'
})
export class SyscursosComponent {

  cursos: any;

  constructor(

    private cursoData: CursoServiceService,

  ) {
    
  }

  ngOnInit(): void {
   this.getCursoData()
  }

  getCursoData() {
    this.cursoData.getData().subscribe((res) => {
      this.cursos = res;
    });
  }

  deleteCursoData(id: any) {
    this.cursoData.deleteData(id).subscribe((res) => {
      this.getCursoData();
    });
  }
}
