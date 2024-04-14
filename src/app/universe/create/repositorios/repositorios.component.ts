import { Component } from '@angular/core';
import { RepositorioServiceService } from '../../services/repositorio-service.service';
import { Repositorio } from '../../model/repositorio';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrl: './repositorios.component.css'
})
export class RepositoriosComponent {
  repositorios:any;
  repositorio=new Repositorio();


  
  constructor(private dataService:RepositorioServiceService){}

  ngOnInit():void{
    this.getRepositorioData();
  }

  getRepositorioData(){
    this.dataService.getData().subscribe(res=>{
      this.repositorios=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.repositorio).subscribe(res=>{
    this.getRepositorioData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getRepositorioData();
})
}
}
