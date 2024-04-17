import { Component } from '@angular/core';
import { DepartamentoServiceService } from '../../services/departamento-service.service';
import { Departamento } from '../../model/departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css'
})
export class DepartamentosComponent {
  departamentos:any;
  departamento=new Departamento();


  
  constructor(private dataService:DepartamentoServiceService,private router:Router){}

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
    console.log('Sucessfull')
    this.router.navigate(['home']);
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getDepartamentoData();
  
})
}
}
