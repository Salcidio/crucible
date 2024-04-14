import { Component } from '@angular/core';
import { AlunoServiceService } from '../../services/aluno-service.service';
import { Aluno } from '../../model/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {

  alunos:any;
  aluno=new Aluno();


  
  constructor(private dataService:AlunoServiceService){}

  ngOnInit():void{
    this.getAlunoData();
  }

  getAlunoData(){
    this.dataService.getData().subscribe(res=>{
      this.alunos=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.aluno).subscribe(res=>{
    this.getAlunoData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getAlunoData();
})
}
}
