import { Component } from '@angular/core';
import { TurmaServiceService } from '../../services/turma-service.service';
import { Turma } from '../../model/turma';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrl: './turmas.component.css'
})
export class TurmasComponent {
  turmass:any;
  turmas=new Turma();


  
  constructor(private dataService:TurmaServiceService){}

  ngOnInit():void{
    this.getTurmasData();
  }

  getTurmasData(){
    this.dataService.getData().subscribe(res=>{
      this.turmass=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.turmas).subscribe(res=>{
    this.getTurmasData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getTurmasData();
})
}
}
