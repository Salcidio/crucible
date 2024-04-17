import { Component } from '@angular/core';
import { FuncionarioServiceService } from '../../services/funcionario-service.service';
import { Funcionario } from '../../model/funcionario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})
export class FuncionariosComponent {
  funcionarios:any;
  funcionario=new Funcionario();


  
  constructor(private dataService:FuncionarioServiceService,private router:Router){}

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
    console.log('Sucessfull')
    this.router.navigate(['home']);
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getFuncionarioData();
})
}
}
