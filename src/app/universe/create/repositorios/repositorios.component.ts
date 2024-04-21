import { Component } from '@angular/core';
import { RepositorioServiceService } from '../../services/repositorio-service.service';
import { Repositorio } from '../../model/repositorio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrl: './repositorios.component.css'
})
export class RepositoriosComponent {
  repositorios:any;
  repositorio=new Repositorio();


  
  constructor(private dataService:RepositorioServiceService,private router:Router){}

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
    console.log('successfull')
    this.router.navigate(['home'])
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getRepositorioData();
})
}
}
