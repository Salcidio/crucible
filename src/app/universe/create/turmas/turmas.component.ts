import { Component } from '@angular/core';
import { TurmaServiceService } from '../../services/turma-service.service';
import { Turma } from '../../model/turma';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrl: './turmas.component.css'
})
export class TurmasComponent {
  turmas:any;
  turma=new Turma();


  
  constructor(private dataService:TurmaServiceService,private router:Router){}

  ngOnInit():void{
    this.getTurmasData();
  }

  getTurmasData(){
    this.dataService.getData().subscribe(res=>{
      this.turmas=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.turma).subscribe(res=>{
    this.getTurmasData();
    console.log('successfull')
    this.router.navigate(['home'])

  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getTurmasData();
  
})
}
}
