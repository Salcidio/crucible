import { Component } from '@angular/core';
import { DepartamentoServiceService } from '../../../services/departamento-service.service';

@Component({
  selector: 'app-sysdepartamentos',
  templateUrl: './sysdepartamentos.component.html',
  styleUrl: './sysdepartamentos.component.css'
})
export class SysdepartamentosComponent {
  departamentos: any;
  constructor(
 
    private departamentoData: DepartamentoServiceService,
   
  
  ) {
    
  }

  ngOnInit(): void {
   this.getDepartamentoData()
  }
  getDepartamentoData() {
    this.departamentoData.getData().subscribe((res) => {
      this.departamentos = res;
    });
  }

  deleteDepartamentoData(id: any) {
    this.departamentoData.deleteData(id).subscribe((res) => {
      this.getDepartamentoData();
    });
  }
}
