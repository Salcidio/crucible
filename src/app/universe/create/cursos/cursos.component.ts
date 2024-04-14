import { Component } from '@angular/core';
import { CursoServiceService } from '../../services/curso-service.service';
import { Curso } from '../../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos:any;
  curso=new Curso();


  
  constructor(private dataService:CursoServiceService){}

  ngOnInit():void{
    this.getCursoData();
  }

  getCursoData(){
    this.dataService.getData().subscribe(res=>{
      this.cursos=res;

    })
  }

 insertData(){
  this.dataService.insertData(this.curso).subscribe(res=>{
    this.getCursoData();
  })


}

deleteData(id:any){
this.dataService.deleteData(id).subscribe(res=>{
  this.getCursoData();
})
}
}
