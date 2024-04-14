import { Component } from '@angular/core';
import { DepartamentoServiceService } from '../../services/departamento-service.service';
import { Departamento } from '../../model/departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css'
})
export class DepartamentosComponent {
  departamentos:any;
  departamento=new Departamento();


  
  constructor(private dataService:DepartamentoServiceService){}

  ngOnInit():void{
    this.getDepartamentoData();
  }

  getDepartamentoData(){
    this.dataService.getData().subscribe(res=>{
      this.departamentos=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.departamento).subscribe(res=>{
    this.getDepartamentoData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getDepartamentoData();
})
}
}
