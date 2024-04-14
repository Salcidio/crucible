import { Component } from '@angular/core';
import { ProfessorServiceService } from '../../services/professor-service.service';
import { Professor } from '../../model/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css'
})
export class ProfessoresComponent {
  professors:any;
  professor=new Professor();


  
  constructor(private dataService:ProfessorServiceService){}

  ngOnInit():void{
    this.getProfessorData();
  }

  getProfessorData(){
    this.dataService.getData().subscribe(res=>{
      this.professors=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.professor).subscribe(res=>{
    this.getProfessorData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getProfessorData();
})
}
}
