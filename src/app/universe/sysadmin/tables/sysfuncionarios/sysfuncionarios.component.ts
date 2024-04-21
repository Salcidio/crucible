import { Component } from '@angular/core';
import { FuncionarioServiceService } from '../../../services/funcionario-service.service';

@Component({
  selector: 'app-sysfuncionarios',
  templateUrl: './sysfuncionarios.component.html',
  styleUrl: './sysfuncionarios.component.css'
})
export class SysfuncionariosComponent {
  funcionarios: any;

  constructor(
    private funcionarioData: FuncionarioServiceService,
   
 
 ) {
   
 }

 ngOnInit(): void {
  this.getFuncionarioData()
 }


 getFuncionarioData() {
  this.funcionarioData.getData().subscribe((res) => {
    this.funcionarios = res;
  });
}


deleteFuncionarioData(id: any) {
  this.funcionarioData.deleteData(id).subscribe((res) => {
    this.getFuncionarioData();
  });
}

}
