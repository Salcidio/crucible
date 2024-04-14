import { Component } from '@angular/core';
import { FuncionarioServiceService } from '../../services/funcionario-service.service';
import { Funcionario } from '../../model/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})
export class FuncionariosComponent {
  funcionarios:any;
  funcionario=new Funcionario();


  
  constructor(private dataService:FuncionarioServiceService){}

  ngOnInit():void{
    this.getFuncionarioData();
  }

  getFuncionarioData(){
    this.dataService.getData().subscribe(res=>{
      this.funcionarios=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.funcionario).subscribe(res=>{
    this.getFuncionarioData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getFuncionarioData();
})
}
}
